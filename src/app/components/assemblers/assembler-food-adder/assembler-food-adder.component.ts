import { Component, AfterViewInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import Swiper from 'swiper';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';


@Component({
  selector: 'assembler-food-adder',
  standalone: true,
  imports: [FormsModule, CommonModule, TypeaheadModule ],
  templateUrl: './assembler-food-adder.component.html',
  styleUrl: './assembler-food-adder.component.css'
})
export class AssemblerFoodAdderComponent implements AfterViewInit{
  @Input() assemblerStep: number=1;
  subcategoryChosen = false;
  selectedItem = '';
  cards: Array<{ category: string; image: string; subcategory: string }> = [];

  categories = ['Electronics', 'Books', 'Fashion'];
  subcategories = ['Phones', 'Laptops', 'Cameras', 'Clothing', 'Accessories'];
  filteredItems: string[] = [];

  chooseCategory() {
    // Logic for choosing a category
    alert('Category chosen!');
  }

  chooseSubcategory() {
    this.subcategoryChosen = true;
  }

  filterItems(query: string) {
    this.filteredItems = this.subcategories.filter(item =>
      item.toLowerCase().includes(query.toLowerCase())
    );
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      map(term =>
        this.subcategories.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10)
      )
    );

  onSelectItem(event: any) {
    const subcategory = event.item;
    const newCard = {
      category: 'Sample Category',
      image: 'https://via.placeholder.com/150',
      subcategory: subcategory
    };
    this.cards.push(newCard);
  }

  ngAfterViewInit() {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 10,
      freeMode: true,
    });
  }
}