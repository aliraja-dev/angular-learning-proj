import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
date: Date = new Date();
filteredStatus: string = '';
servers = [
  {
    instanceType: 'medium',
    name: 'Production',
    status: 'stable',
    started: new Date(15, 1, 2017)
  },
  {
    instanceType: 'large',
    name: 'User Database',
    status: 'stable',
    started: new Date(15, 1, 2017)
  },
  {
    instanceType: 'small',
    name: 'Development Server',
    status: 'offline',
    started: new Date(15, 1, 2017)
  },
  {
    instanceType: 'small',
    name: 'Testing Environment Server',
    status: 'stable',
    started: new Date(15, 1, 2017)
  }
];

asyncResponse = new Promise ((resolve, reject) => {
  setTimeout(()=>{
    resolve('active')
  }, 3000);
});
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(){
    this.servers.push(  {
      instanceType: 'large',
      name: 'DFM',
      status: 'critical',
      started: new Date()
    },);
  }

  getStatusClasses(server: {instanceType: string, name: string, status: string, started: Date}) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical',
    };
  }
}
