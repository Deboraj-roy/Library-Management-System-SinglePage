import { Component } from "@angular/core";
@Component({
    selector: 'app-navbar',
    standalone: true,
    template: `<h1> Navbar Component</h1>
                <p> Dummy Pragaraph</p>
                <button> Submit </button> `
})
export class AppNavbar{
app = 'Deboraj'
}