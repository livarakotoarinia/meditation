import { Component } from '@angular/core';
import { MedPage } from '../med/med.page';
import { ModalController, PickerController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  results = [
    {
      name: 'sunset',
      title: 'Coucher de soleil',
      img: 'assets/sky.jpg',
      sound: 'assets/sounds/lucid-dreams.mp3'
    },
    {
      name: 'beach',
      title: 'Plage',
      img: 'assets/tropical-2.jpeg',
      sound: 'assets/sounds/t.mp3'
    },
    {
      name: 'meditation',
      title: 'Meditation',
      img: 'assets/meditation.jpg',
      sound: 'assets/sounds/transcendence.mp3'
    },
    {
      name: 'night',
      title: 'Nuit',
      img: 'assets/night.jpg',
      sound: 'assets/sounds/world-of-dreams.mp3'
    },
    {
      name: 'lac',
      title: 'Lac',
      img: 'assets/lac.jpg',
      sound: 'assets/sounds/come-in-chill-out.mp3'
    },
    {
      name: 'wave',
      title: 'Vague',
      img: 'assets/waves.jpg',
      sound: 'assets/sounds/thankful.mp3'
    },
    {
      name: 'forest',
      title: 'Foret',
      img: 'assets/forest.jpg',
      sound: 'assets/sounds/cascades.mp3'
    },
    {
      name: 'mountains',
      title: 'Montagne',
      img: 'assets/montain.jpg',
      sound: 'assets/sounds/enlightened.mp3'
    },
  ];
  // default 1 min
  meditationDurationMinutes = 1;
  // default 60s
  meditationDurationSeconds = 60;

  constructor(private modal: ModalController, private picker: PickerController) {}

  async openMed(meditation: any) {
    const modal = await this.modal.create({
      component: MedPage,
      componentProps: {
        name: meditation.name,
        title: meditation.title,
        image: meditation.img,
        sound: meditation.sound,
        // must be in milliseconds for the display in roundprogress
        duration: this.meditationDurationSeconds
      }
    });

    return await modal.present();
  }

  async openPicker() {
    const picker = await this.picker.create({
      buttons: [{
        text: 'Valider',
        handler: data => {
          console.log('seconds: ' + data.minutes.value);
          this.meditationDurationSeconds = data.minutes.value;
          this.meditationDurationMinutes = data.minutes.value / 60;
        }
      }],
      columns: [
        {
          name: 'minutes',
          options: [
            {
              text: '1 Minutes',
              value: 60
            },
            {
              text: '3 Minutes',
              value: 180
            },
            {
              text: '5 Minutes',
              value: 300
            },
            {
              text: '7 Minutes',
              value: 420
            },
            {
              text: '10 Minutes',
              value: 600
            }
          ]
        }
      ]
    });
    await picker.present();
  }
}
