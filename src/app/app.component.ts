import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bigram Parsing';
  data = [];
  message = "";

  onBigramProcessed(bigramData: Map<string, number>): void {
    this.data = this.convertMapToArray(bigramData); 
    this.message = this.data.length == 0 ? "The input sentence did not produce any result." : ""; 
  }

  convertMapToArray(source: Map<string, number>): any[] {
    let wordPairsArray = [];
    for(let [key, value] of source) {
      wordPairsArray.push([
        key, value
      ]);
    }
    return wordPairsArray;
  }
}
