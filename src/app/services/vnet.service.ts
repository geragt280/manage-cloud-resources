import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { VNetData, VNet } from '../models/vnet.model';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VNetService {
  private apiUrl = 'vnets.json';
  private vNetsData: VNet[] = []; // Local cache for in-memory operations

  constructor(private http: HttpClient) {
    this.loadVNets(); // Initial load
  }

  // Fetches VNets from JSON file and stores in local cache
  private loadVNets(): void {
    this.getVNets().subscribe((data) => {
      this.vNetsData = data.vnets;
      console.log("Loaded VNets:", this.vNetsData);
    });
  }

  // Returns the cached VNets as an Observable
  getVNets(): Observable<VNetData> {
    return this.http.get<VNetData>(this.apiUrl).pipe(
      tap((data) => {
        this.vNetsData = data.vnets;
      })
    );
  }

  // Adds a new VNet to the local cache
  addVNet(newVNet: VNet): Observable<VNet[]> {
    this.vNetsData.push(newVNet);
    console.log("Added VNet:", newVNet);
    return of(this.vNetsData); // Returns the updated list
  }

  // Deletes a VNet by ID from the local cache
  deleteVNet(id: string): Observable<VNet[]> {
    this.vNetsData = this.vNetsData.filter(vNet => vNet.id !== id.toString());
    console.log("Deleted VNet with ID:", id);
    return of(this.vNetsData); // Returns the updated list
  }
}
