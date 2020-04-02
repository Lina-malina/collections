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

  public newCollection: ICollection = {
    name: '',
    description: '',
    authorId: null,
    authorName: this.auth.getUserDetails().name,
    _id: ''
  };
  public isCreationMode = true;

  constructor(
    private auth: AuthService,
    private collManagement: CollectionsManagementService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.newCollection.authorId = this.auth.getUserDetails()._id;
    this.route.queryParamMap.subscribe(params => {
      if (params.get('userId')) {
        this.newCollection.authorId = params.get('userId');
      }
    });

    if (this.route.snapshot.paramMap.get('id')) {
      this.isCreationMode = false;
      this.collManagement.getCollectionById(this.route.snapshot.paramMap.get('id')).subscribe(currentCollection =>
        this.newCollection = currentCollection);
    }
  }

  public addCollection() {
    this.collManagement.addCollection(this.newCollection).subscribe(() => {
      this.router.navigateByUrl('/user-page');
      this.route.queryParamMap.subscribe(params => {
        if (params.get('userId')) {
          this.router.navigateByUrl('/user-page/' + params.get('userId'));
        }
      });
    });
  }
  public editCollection() {
    this.collManagement.editCollection(this.newCollection._id, this.newCollection).subscribe(() => {
      this.router.navigateByUrl('/user-page');
    });
  }
}
