import { Component, inject, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CarService } from '../services/car.service';
import { VNetService } from '../services/vnet.service';
import { VNet } from '../models/vnet.model';
import { NgFor } from '@angular/common';

@Component({
  standalone: true,
  selector: 'home',
  template: `
    <div style="margin-left:10px; margin-top: 20px;">
      <!-- <form [formGroup]="profileForm" (ngSubmit)="handleSubmit()">
        <label>
          Name
          <input type="text" formControlName="name" />
        </label>
        <label>
          Email
          <input type="email" formControlName="email" />
        </label>
        <button type="submit" [disabled]="!profileForm.valid">Submit</button>
      </form> -->

      <!-- <h2>Profile Form</h2>
      <p>Name: {{ profileForm.value.name }}</p>
      <p>Email: {{ profileForm.value.email }}</p>

      <p>{{ carService.getCar(2) }}</p> -->
      <h1>Virtual Networks</h1>
      <ul>
        <li *ngFor="let vnet of vnets">
          {{ vnet ? vnet.name : '' }} ({{ vnet.addressSpace }})
          <!-- <button (click)="addVNet()">Edit</button> -->
          <button (click)="deleteVNet(vnet.id)">Delete</button>
        </li>
      </ul>
    </div>
  `,
  imports: [ReactiveFormsModule, NgFor],
})
export class HomeComponent implements OnInit {
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  carService = inject(CarService);
  vNetService = inject(VNetService);
  vnets: VNet[] = [];
  constructor() {}

  ngOnInit() {
    this.loadVNets();
  }

  loadVNets(): void {
    this.vNetService.getVNets().subscribe((data) => {
      this.vnets = data.vnets;
    });
  }

  addVNet() {
    const newVNet: VNet = {
      id: Date.now().toString(),
      name: 'New VNet',
      addressSpace: 'abc',
      region: 'xyz',
    }; // Example VNet
    this.vNetService.addVNet(newVNet).subscribe((vnets) => {
      this.vnets = vnets;
    });
  }

  deleteVNet(id: string) {
    this.vNetService.deleteVNet(id).subscribe((vnets) => {
      this.vnets = vnets;
    });
  }

  handleSubmit() {
    alert(this.profileForm.value.name + ' | ' + this.profileForm.value.email);
  }
}
