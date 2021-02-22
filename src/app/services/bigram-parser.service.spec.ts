import { stringify } from '@angular/compiler/src/util';
import { TestBed } from '@angular/core/testing';

import { BigramParserService } from './bigram-parser.service';

describe('BigramParserService', () => {
  let service: BigramParserService;
  let result: Map<string, number>;
  const data: string = `
  And so, my fellow Americans: ask not what your country can do for you - \
  ask what you can do for your country. My fellow citizens of the world: \
  ask not what America will do for you, but what together we can do for the \
  freedom of man.
  `;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BigramParserService);
    result = new Map<string, number>();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // ************************************
  // testing with random string
  // ************************************
  it('should produce no word pair when parsing empty string', () => {
    let inputSentence = "";
    result = service.parse(inputSentence);
    expect(result.size).toEqual(0);
  })

  it('should produce no word pair when parsing only a single word', () => {
    let inputSentence = "hello";
    result = service.parse(inputSentence);
    expect(result.size).toEqual(0);
  })

  it('should produce only 1 word pair', () => {
    let inputSentence = "((///))###<hello>+++[world]%%%%%";
    result = service.parse(inputSentence);
    expect(result.size).toEqual(1);
  })

  it('should produce 9 word pairs', () => {
    let inputSentence = "https://dotnet.microsoft.com/learn/aspnet/hello-world-tutorial/intro";
    result = service.parse(inputSentence);
    expect(result.size).toEqual(9);
  })

  // ************************************
  // testing with string constant
  // ************************************
  it('count should be 1 for the word pair "and so"', () => {
    result = service.parse(data);
    let count = result.get("and so");
    expect(count).toEqual(1);
  })

  it('count should be 4 for the word pair "do for"', () => {
    result = service.parse(data);
    let count = result.get("do for");
    expect(count).toEqual(4);
  })
});
