import { Injectable } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';

@Injectable()
export class XmlUtil {
  /**
   * Converts an uploaded file to XML
   * @param file that needs to be converted to parsed XML
   * @returns parsed XML
   */

  fileToXml(file: File): Observable<XMLDocument> {
    return this.readAsText(file).pipe(
      map(result => this.stringXmlToXml(result))
    );
  }

   /**
    * Asynchronously reads a `File` object to a `string`.
    * @param file A plain uploaded file object.
    * @returns An observable that emits the file as text.
    */
  readAsText(file: File): Observable<string> {
    const reader = new FileReader();
    const observable = fromEvent(reader, 'load')
      .pipe(map(() => reader.result as string), first());
    reader.readAsText(file);
    return observable;
  }

  /**
   * Converting unreadable string XML to parsed XML
   * @param string A plain stringXml
   * @returns a parsed XML
   */

  stringXmlToXml(longString: string): XMLDocument {
    const parser = new DOMParser();
    const parsed = parser.parseFromString(longString, 'text/xml');
    const parsererror = this.getTag(parsed, 'parsererror');

    if (parsererror) {
      throw new Error('Error parsing string to XML; may not be valid XML.');
    }

    return parsed;
  }

  /**
   * Retrieves a collection of objects based on the specified element name
   * @param xml parsed XMLDocument file
   * @param tag specifies the name of an element
   */

  getTag(xml: XMLDocument, tag: string): Element {
    return xml.getElementsByTagName(tag)[0];
  }
}
