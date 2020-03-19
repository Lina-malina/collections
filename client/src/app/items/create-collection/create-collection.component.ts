import { Component, OnInit } from '@angular/core';
import { ICollection } from '../models/collection.model';
import { AuthService } from 'src/app/auth/services/auth.service';
import { CollectionsManagementService } from '../services/collections-management.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-collection',
  templateUrl: './create-collection.component.html',
  styleUrls: ['./create-collection.component.scss']
})
export class CreateCollectionComponent implements OnInit {

  public newCollection: ICollection = {
    name: '',
    description: '',
    authorId: this.auth.getUserDetails()._id,
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
    if (this.route.snapshot.paramMap.get('id')) {
      this.isCreationMode = false;
      this.collManagement.getCollectionById(this.route.snapshot.paramMap.get('id')).subscribe(currentCollection =>
        this.newCollection = currentCollection);
    }
  }

  public addCollection() {
    this.collManagement.addCollection(this.newCollection).subscribe(() => {
      this.router.navigateByUrl('/collections');
    });
  }
  public editCollection() {
    this.collManagement.editCollection(this.newCollection._id, this.newCollection).subscribe(() => {
      this.router.navigateByUrl('/collections');
    });
  }
}
