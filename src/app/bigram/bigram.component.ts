import { Component, EventEmitter, Output } from '@angular/core';
import { BigramParserService } from '../services/bigram-parser.service';

@Component({
  selector: 'app-bigram',
  templateUrl: './bigram.component.html',
  styleUrls: ['./bigram.component.css']
})
export class BigramComponent {

  sentence : string;
  bigram: Map<string, number> = new Map<string, number>();

  @Output() onBigramProcessed: EventEmitter<Map<string, number>> = 
    new EventEmitter<Map<string, number>>();

  constructor(private bigramParserServive: BigramParserService) { }

  onSubmitSentence(): void {
    this.bigram = this.bigramParserServive.parse(this.sentence);
    this.onBigramProcessed.emit(this.bigram);
  }

  onClearField(): void {
    this.sentence = "";
  }
}
