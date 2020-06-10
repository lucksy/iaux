import {
  LitElement,
  html,
  css,
  customElement,
  CSSResult,
  TemplateResult,
} from 'lit-element';

import applePayButtonImage from '../assets/img/payment-providers/applepay';
import googlePayButtonImage from '../assets/img/payment-providers/googlepay';
import paypalButtonImage from '../assets/img/payment-providers/paypal';
import venmoButtonImage from '../assets/img/payment-providers/venmo';

@customElement('payment-selector')
export class PaymentSelector extends LitElement {
  /** @inheritdoc */
  render(): TemplateResult {
    return html`
      <div class="payment-container">

        <div
          class="applepay provider-button"
          @click=${this.applePaySelected}>${applePayButtonImage}</div>

        <div
          class="googlepay provider-button"
          @click=${this.googlePaySelected}>${googlePayButtonImage}</div>

        <div
          class="venmo provider-button"
          @click=${this.venmoSelected}>${venmoButtonImage}</div>

        <div class="paypal-container">
          <div class="provider-button paypal-local-button">
            ${paypalButtonImage}
          </div>
          <slot name="paypal-button"></slot>
        </div>

        <button
          @click=${this.creditCardSelected}
          class="button-style credit-card-button">Credit Card</button>
      </div>
    `;
  }

  /** inheritdoc */
  firstUpdated(): void {
    this.dispatchEvent(new Event('firstUpdated'));
  }

  private googlePaySelected(): void {
    this.dispatchEvent(new Event('googlePaySelected'));
  }

  private applePaySelected(e: Event): void {
    const event = new CustomEvent('applePaySelected', { detail: { originalEvent: e }})
    this.dispatchEvent(event);
  }

  private venmoSelected(): void {
    this.dispatchEvent(new Event('venmoSelected'));
  }

  private creditCardSelected(): void {
    this.dispatchEvent(new Event('creditCardSelected'));
  }

  /** @inheritdoc */
  static get styles(): CSSResult {
    const paymentButtonWidthCss = css`var(--paymentButtonWidth, 50px)`;

    return css`
      .payment-container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        column-gap: 10px;
        row-gap: 5px;
      }

      .provider-button {
        cursor: pointer;
        width: ${paymentButtonWidthCss};
      }

      .paypal-local-button {
        position: absolute;
        z-index: 0;
      }

      .credit-card-button {
        grid-column-start: 1;
        grid-column-end: 5;
      }
    `;
  }
}
