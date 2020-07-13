import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  baseUrl: any;
  id: any;
  data: any;

  constructor(private http: Http, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id")
    this.baseUrl = `http://pointters-api-test.us-east-1.elasticbeanstalk.com:9000/service/${this.id}/detail`

    this.http.get(`${this.baseUrl}`).subscribe(
      (result) => {
        this.data = result['_body'];
      }
    )
  } 

}
