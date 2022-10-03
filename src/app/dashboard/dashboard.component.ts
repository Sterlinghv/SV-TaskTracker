import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit 
{
  Designation!: string;
  Username!: string;
  NoOfTeamMembers!: number;
  TotalCostOfAllProjects!: number;
  PendingTasks!: number;
  UpComingProjects!: number;
  ProjectCost!: number;
  CurrentExpenditure!: number;
  AvailableFunds!: number;

  Clients!: string[];
  Projects!: string [];
  Years: number[] = [];
  TeamMemberSummary!: any[];
  TeamMembers!: any[];
  
  ngOnInit(): void 
  {
    this.Designation = "Team Leader";
    this.Username = "John Smith";
    this.NoOfTeamMembers = 67;
    this.TotalCostOfAllProjects = 240;
    this.PendingTasks = 15;
    this.UpComingProjects = 2;
    this.ProjectCost = 2113507;
    this.CurrentExpenditure = 96788;
    this.AvailableFunds = 52536;

    this.Clients = [
      "ABC Infotech Ltd.", "DEF Software Solutions", "GHI Industries"
    ];

    this.Projects = [
      "Project A", "Project B", "Project C", "Project D"
    ];

    for (var i = 2019; i >= 2010; i--)
    {
      this.Years.push(i);
    }

    this.TeamMemberSummary = [
      {Region: "East", TeamMemberCount: 20, TemporarilyUnavailableMembers: 4},
      {Region: "West", TeamMemberCount: 15, TemporarilyUnavailableMembers: 8},
      {Region: "South", TeamMemberCount: 17, TemporarilyUnavailableMembers: 1},
      {Region: "North", TeamMemberCount: 15, TemporarilyUnavailableMembers: 6}
    ]

    this.TeamMembers = [
      {Region: "East", Members: [
        {ID: 1, Name: "Ford", Status: "Available"},
        {ID: 2, Name: "Miller", Status: "Available"},
        {ID: 3, Name: "Jones", Status: "Busy"},
        {ID: 4, Name: "Tanya", Status: "Busy"}
      ]},
      {Region: "West", Members: [
        {ID: 5, Name: "Yim", Status: "Available"},
        {ID: 6, Name: "Alfred", Status: "Busy"},
        {ID: 7, Name: "Kenny", Status: "Busy"},
        {ID: 8, Name: "Dale", Status: "Busy"}
      ]},
      {Region: "South", Members: [
        {ID: 9, Name: "Scott", Status: "Available"},
        {ID: 10, Name: "Lizabeth", Status: "Available"},
        {ID: 11, Name: "Lily", Status: "Available"},
        {ID: 12, Name: "Tony", Status: "Busy"}
      ]},
      {Region: "North", Members: [
        {ID: 13, Name: "Ethan", Status: "Busy"},
        {ID: 14, Name: "Erik", Status: "Available"},
        {ID: 15, Name: "Mueller", Status: "Available"},
        {ID: 16, Name: "Chad", Status: "Available"}
      ]}
    ]
  }

}
