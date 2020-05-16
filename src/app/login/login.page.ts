import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ModalController} from '@ionic/angular';
import {FingerprintAIO} from '@ionic-native/fingerprint-aio';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    @Input() isModal: boolean;

    constructor(
        private router: Router,
        private faio: FingerprintAIO,
        private modalCtrl: ModalController
    ) {
    }

    ngOnInit() {
        console.log('modal statue : ', this.isModal);
    }

    login() {
        this.faio.show({
            clientId: '43580117595-t4ca4g8lidha4a15942dd4uja60csi81.apps.googleusercontent.com',
            clientSecret: 'MJeNE2PJjVppYP9kaFVE74Nm',
            disableBackup: true,  // Only for Android(optional)
            // localizedFallbackTitle: 'Use Pin', // Only for iOS
            // localizedReason: 'Please authenticate' // Only for iOS
        }).then(() => {
            if (this.isModal) {
                this.modalCtrl.dismiss();
            } else {
                this.router.navigateByUrl('/tabs/home');
            }
        })
    }

}
