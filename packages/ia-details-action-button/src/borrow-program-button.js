import { html } from 'lit-element';
import TrackedElement from './tracked-element';
import searchIcon from '../assets/icons/icon-question-mark';
import borrowButtonCSS from '../assets/styles/css-borrow-button';

class BorrowProgramButton extends TrackedElement {
  static get styles() {
    return borrowButtonCSS;
  }

  static get properties() {
    return {
      identifier: { type: String },
      borrowButton: { type: String },
    };
  }

  constructor() {
    super();
    this.identifier = '';
    this.borrowButton = '';
  }

  render() {
    if (this.borrowButton === 'none') return;
    return html`
      <div class="grid-item">
      <a
        class='topinblock button borrow-program-button'
        href='/services/borrow/${this.identifier}'
        class='stealth'
        rel='nofollow'>
        ${searchIcon} <span>Borrow Program</span>
      </a>
      </div>
    `;
  }
}

customElements.define('borrow-program-button', BorrowProgramButton);