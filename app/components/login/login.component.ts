import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario = {
    email: '',
    password: '',
  }

  ngOnInit() {
 
  }

  constructor(private authService: AuthService, private router: Router) { }

  Ingresar() {
    const { email, password } = this.usuario;
    this.authService.login(email, password).then(user => {
      console.log("bienvenue", user);
      if(!user) {
        alert("Données incorrectes, si vous n’avez pas de compte Registrate!");
        return;
      };
      this.router.navigate(['/page'])
    }).catch(err=>{
      console.log(err)
    })
  }

  logout() {
    this.authService.logout();
  }
}
