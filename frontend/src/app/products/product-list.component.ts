import { Component, OnInit } from '@angular/core';
import { IProduct } from './products';
import { ProductService } from './product.service';

@Component({
    moduleId: module.id,
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit {
    errorMessage: string;
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imgageMargin: number = 2;
    showImage: boolean = false;
    filterBy: string = "";
    products: IProduct[];

    constructor(private productService: ProductService) {
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        console.log('In ProductListComponent -> ngOnInit');
        this.products = this.productService.getProducts();
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }
}