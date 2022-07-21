import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  
  categories: {id: number, name: string}[] = [];
  

  constructor(private categoryService: CategoryService) { }

    ngOnInit(): void {
      this.categoryService.getCategoriesFromDb().subscribe(categoriesFromDb => {
        if (categoriesFromDb) {
        this.categories = categoriesFromDb;
        }
      })
    }

    onSubmit(form: NgForm) {
        this.categories.push(form.value);
      this.categoryService.saveCategoriesToDb(this.categories).subscribe();
  }

  deleteCategory(category: {id: number, name: string}) {
    const index = this.categories.indexOf(category);
    this.categories.splice(index,1);
    this.categoryService.saveCategoriesToDb(this.categories).subscribe();
  
  }
  //kustutamine -- kodus!!
}

// 1.Udemy projektid / Koolituse projektid / Youtube
// 2.Teistest failidest kopeerida
// 3.Googeldamine - How to delete from array Angular