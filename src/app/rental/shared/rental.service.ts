import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Rental} from './rental.model';


@Injectable()
export class RentalService {
    private rentals: Rental[] = [{
        id: '1',
        title: 'Central Apartment',
        city: 'New York',
        street: 'Times Squre',
        category: 'apartment',
        image: 'placeholder.com',
        bedrooms: 3,
        description: 'Its a very nice apertment',
        dailyRate: 34,
        shared: false,
        createdAt: '24/12/2017'
      },
      {
        id: '2',
        title: 'asdf Apartment',
        city: 'bvjdf York',
        street: 'Times Squre',
        category: 'apartment',
        image: 'placeholder.com',
        bedrooms: 3,
        description: 'Its a very sdhfgvsh nice apertment',
        dailyRate: 34,
        shared: false,
        createdAt: '24/12/2017'
      },
      {
        id: '3',
        title: 'Central Apseudfgyartment',
        city: 'New Yaaaork',
        street: 'Times asdadSqure',
        category: 'apartsssment',
        image: 'placeholder.com',
        bedrooms: 3,
        description: 'Its a very nice apertment',
        dailyRate: 34,
        shared: false,
        createdAt: '24/12/2017'
      },
      {
        id: '4',
        title: 'Centssral Apartment',
        city: 'Newaa York',
        street: 'Times wwSqure',
        category: 'apaqqrtment',
        image: 'placehrrolder.com',
        bedrooms: 3,
        description: 'Its a versdafdfsdfdsy nice apertment',
        dailyRate: 34,
        shared: false,
        createdAt: '24/12/2017'
      }];

      public getRentalById(rentalId: string): Observable<Rental> {

        return new Observable<Rental>((observer) => {
            setTimeout(() => {
                console.log('inside rental service ts file');
                const foundRental = this.rentals.find((rental) => {
                    console.log('//////////////////////////////////');
                    return rental.id === rentalId;
                });
                observer.next(foundRental);
            }, 500);

        });
      }

      public getRentals(): Observable<Rental[]> {
        return new Observable<Rental[]>((observer) => {

            setTimeout(() => {
                observer.next(this.rentals);
            }, 2000);

        });

      }

}
