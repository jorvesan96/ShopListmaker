import { Component,OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit{
  productos: any[] = [];

  ngOnInit() {
    const firebaseConfig = {};

    const db = firebase.firestore();

    const collectionRef = db.collection('productos');
    collectionRef.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.productos.push(doc.data());
      });
    });
  }
}

