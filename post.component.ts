import {Component} from "@angular/core";
import {Http} from "@angular/http";
@Component({
    selector:"post-form",
    templateUrl:"./post.component.html"
})
export class postcomponent{
    posts:any[];
constructor(http:Http){
    http.get("https://jsonplaceholder.typicode.com/posts").subscribe((res)=>{
        console.log(res.json());
        this.posts=res.json();
    })

}
} 