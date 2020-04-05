import { Component, OnInit } from '@angular/core';
import { ICollection } from '../models/collection.model';
import { AuthService } from 'src/app/auth/services/auth.service';
import { CollectionsManagementService } from '../services/collections-management.service';
import { Router, ActivatedRoute } from '@angular/router';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';

@Component({
  selector: 'app-create-collection',
  templateUrl: './create-collection.component.html',
  styleUrls: ['./create-collection.component.scss']
})
export class CreateCollectionComponent implements OnInit {

  public newPatient: ICollection = {
    _id: '',
    fullName: '',
    isMale: true,
    dateOfBirth: '',
    address: '',
    number: '',
    doctorInCharge: null,
    authorId: null,
  };
  public isCreationMode = true;

  constructor(
    private auth: AuthService,
    private collManagement: CollectionsManagementService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.newPatient.authorId = this.auth.getUserDetails()._id;
    this.newPatient.doctorInCharge = this.auth.getUserDetails().name;
    this.route.queryParamMap.subscribe(params => {
      if (params.get('userId')) {
        this.newPatient.authorId = params.get('userId');
        this.newPatient.doctorInCharge = params.get('userName');
      }
    });

    if (this.route.snapshot.paramMap.get('id')) {
      this.isCreationMode = false;
      this.collManagement.getCollectionById(this.route.snapshot.paramMap.get('id')).subscribe(currentCollection =>
        this.newPatient = currentCollection);
    }
  }

  public addCollection() {
    this.collManagement.addCollection(this.newPatient).subscribe(() => {
      this.router.navigateByUrl('/user-page');
      this.route.queryParamMap.subscribe(params => {
        if (params.get('userId')) {
          this.router.navigateByUrl('/user-page/' + params.get('userId'));
        }
      });
    });
  }
  public editCollection() {
    this.collManagement.editCollection(this.newPatient._id, this.newPatient).subscribe(() => {
      this.router.navigateByUrl('/user-page');
    });
  }
}
