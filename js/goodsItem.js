export const createGoodsItem = (goodCard) => {
  const {
    link,
    image,
    title,
    price,
    saleProcent,
    oldPrice,
    productSale,
  } = goodCard

  return `<li class="goods__item slider__item">
                <a class="product ${productSale}" href="${link}">
                <b class="product__sale-label">
                    −<span class="product__sale-amount">${saleProcent}</span>%
                  </b>
                  <div class="product__image">
                    <picture>
                      <source type="image/webp" srcset="img/${image}@1x.webp 1x, img/${image}@2x.webp 2x">
                      <img src="https://via.placeholder.com/150

                      C/O https://placeholder.com/" width="214" height="248" alt="${title}"
                           srcset="img/${image}@1x.jpg 1x, img/${image}@2x.jpg 2x">
                    </picture>
                  </div>
                  <div class="product__description">
                    <h3 class="product__heading">
                      ${title}
                    </h3>
                    <b class="product__price">
                      <span class="product__price-value">${price}</span><i class="rouble">i</i>
                      <span class="product__price-value product__price-value--old">${oldPrice}</span>
                      <span></span>
                    </b>
                  </div>
                </a>
              </li>`
};
