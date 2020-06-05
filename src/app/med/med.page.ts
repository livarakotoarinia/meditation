import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { Stopwatch } from 'ts-stopwatch';
const stopwatch = new Stopwatch();

@Component({
  selector: 'app-med',
  templateUrl: './med.page.html',
  styleUrls: ['./med.page.scss'],
})
export class MedPage implements OnInit {
  timer: any;
  durations: number;
  title: string;
  img: string;
  sound: string;
  minutes = '00';
  seconds = '00';
  buttonIcon = "pause";
  test;

  constructor(private audio: NativeAudio, private modal: ModalController, private navParams: NavParams) {
    // duration must be in milliseconds
    this.test= this.navParams.get('duration')*1000;
    this.durations = this.navParams.get('duration')*1000;
    this.title = this.navParams.get('title');
    this.img = this.navParams.get('image');
    this.sound = this.navParams.get('sound');
    
    this.readSound();
    this.countDown();
  }

  ngOnInit() {
  }

  countDown() {
    stopwatch.start();
    //  get data in seconds and minutes
    setInterval(() => {
      const time = stopwatch.getTime();
      this.timer = time;
      // Get time in seconds
      const timeInSeconds = Math.floor(time / 1000);
      const minutes = Math.floor(timeInSeconds / 60);
      const seconds = timeInSeconds - minutes * 60;
      if(minutes < 10){
        this.minutes = '0' + minutes;
      } else {
        this.minutes = minutes.toString();
      }

      if(seconds < 10){
        this.seconds = '0' + seconds;
      } else {
        this.seconds = seconds.toString();
      }
    }, 100)
    // stopwatch.getTime();
  }

  readSound() {
    this.audio.preloadSimple('sound', this.sound)
      .then(onSuccess => {
        this.audio.loop('sound')
      }, onError => {
        console.log(onError);

      });
  }

  playPause(){
    if(stopwatch.getState() == 'RUNNING'){
      stopwatch.stop();
      this.buttonIcon = 'play';
      this.audio.stop('sound');
    } else {
      stopwatch.start();
      this.buttonIcon = 'pause';
      this.audio.loop('sound');
    }
  }

  close() {
    this.timer = 0;
    stopwatch.reset();
    this.audio.stop('sound');
    this.modal.dismiss();
  }

}
