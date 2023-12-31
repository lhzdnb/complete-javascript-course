import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', e => {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      handler(Number(btn.dataset.goto));
    });
  }

  _generateMarkup() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage,
    );
    console.log(numPages);
    // Page 1, and there are other pages
    if (this._data.page === 1 && numPages > 1) return this._nextButton();
    // Last Page
    else if (this._data.page === numPages && numPages > 1)
      return this._preButton();
    // Other Page
    else if (this._data.page > 1 && this._data.page < numPages)
      return this._preButton() + this._nextButton();
    // Page 1, and there is no other page
    else return '';
  }

  _preButton() {
    return `
    <button data-goto="${
      this._data.page - 1
    }" class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>Page ${this._data.page - 1}</span>
    </button>
    `;
  }

  _nextButton() {
    return `
    <button data-goto="${
      this._data.page + 1
    }" class="btn--inline pagination__btn--next">
      <span>Page ${this._data.page + 1}</span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
    </button>
    `;
  }
}

export default new PaginationView();
