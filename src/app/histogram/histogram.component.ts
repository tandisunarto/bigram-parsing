import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-histogram',
  templateUrl: './histogram.component.html',
  styleUrls: ['./histogram.component.css']
})
export class HistogramComponent {

  @Input() data: [] = [];
  @Input() message: string;

  constructor () {
  }

  title = 'Bigram and their counts';
  type='Histogram';
  columnNames = ['Count', 'Word Pair'];
  options = {
    colors: ['#66ccff'], 
    is3D: true, 
    legend: 'none',
    chartArea: { 
      left: 50,
      top: 50,
      right: 50,
      bottom: 50
    },
    histogram: {
      bucketSize: 1,
      maxNumBuckets: 100,
      minValue: 0,
      maxValue: this.data.length
    },
  };
  width = 1000;
  height = 800;
}
