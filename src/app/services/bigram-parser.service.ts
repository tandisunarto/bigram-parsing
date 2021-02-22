import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BigramParserService {

  words: string[] = [];
  wordPairs: Map<string, number> = new Map();

  constructor() { }

  parse(inputSentence: string): Map<string, number> {
    this.words = inputSentence === undefined 
      ? [] 
      : this.removeNonAlphaNumericCharacters(inputSentence).split(" ");

    this.wordPairs.clear();
    if (this.words.length >= 2) {
      for(var i:number = 0; i<this.words.length - 1; i++) {
        const wordPair = `${this.words[i].toLowerCase()} ${this.words[i+1].toLowerCase()}`;
        this.wordPairs.set(wordPair, 
          !this.wordPairs.has(wordPair)
            ? 1
            :this.wordPairs.get(wordPair) + 1
          );
      }
    }
    return this.wordPairs;
  }

  removeNonAlphaNumericCharacters(inputSentence: string): string {
    // remove non alpha numeric characters, then
    // replace consecutive spaces with a single space
    return inputSentence.replace(/[^a-zA-Z\d\s']/gi, " ").replace(/^\s+|\s+$|\s+(?=\s)/g, "");
  }

}
