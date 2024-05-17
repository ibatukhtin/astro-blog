import { items } from './benefits-items';

function Benefits() {
  return (
    <section id='benefits' className='benefits'>
      <ul className='ul-unstyled benefits__list'>
        {
          items.filter((item, index) => index < 3)
            .map((filteredItem, index) => Item(filteredItem, index))
        }

        <li className='instant'>
          <h3>Instant trip planning at your fingertips – Try now for free</h3>
          <div className='hero__buttons'>
            <a
              className='tp-button-filled tp-button-with-arrow tp-button-lg'
              href='/create-trip'
              id='createTrip3'
            >
              <span className='button-content'>
                Create trip
              </span>
            </a>
          </div>
        </li>

        {
          items.filter((item, index) => index > 2)
            .map((filteredItem, index) => Item(filteredItem, index))
        }
      </ul>
    </section>
  )
}

const Item = (item: any, index: number) => {
  return (
    <li className='benefits__item' key={index}>
      <div className='row'>
        <div className={ `col ${ item.imageFirst ? 'order-2' : 'order-1' }` }>
          <div className='benefits__content'>
            <h3>{ item.name }</h3>
            <p>{ item.p1 }</p>
            <p>{ item.p2 }</p>
          </div>
        </div>

        <div className={ `col col-with-image ${ item.imageFirst ? 'order-1' : 'order-2' }` }>
          <div className='benefits__image'>
            <img
              src={ item.image }
              width={ item.width }
              height={ item.height }
              style={ { width: '100%', height: 'auto' } }
              alt='AI optimizing the route'
              loading='lazy'
            />
          </div>
        </div>
      </div>
    </li>
  )
}

export default Benefits;
