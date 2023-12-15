import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { UIAppServiceService } from '../uiapp-service.service';

@Component({
  selector: 'app-commit',
  templateUrl: './commit.component.html',
  styleUrls: ['./commit.component.css']
})
export class CommitComponent implements OnInit {
  owner: string | undefined;
  repository: string | undefined;
  commitSHA: string | undefined;
  data:any;  
  

  constructor(private route: ActivatedRoute,
    private uiservices: UIAppServiceService 
    ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.owner = params['owner'];
      this.repository = params['repository'];
      this.commitSHA = params['commitSHA'];
    });
    this.getdata();
   
  }

  getdata(){    
    debugger
    return this.uiservices.getdata(this.owner,this.repository,this.commitSHA).subscribe((res:any)=>{
    this.data=res.value;  
    // this.data = JSON.stringify(this.data);
 });
 
  }

  

  

}
