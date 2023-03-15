const React = require('react')
const breads_router = require('../controllers/breads_controllers')
const Default = require('./layouts/Default')

function New () {
    return (
      <Default>
        <h2>Add a new bread</h2>

        <form action='/breads' method='POST'>
            <label htmlFor="name">Name</label>
            <input type="text" name='name' id='name' required />

            <label htmlFor="image">Name</label>
            <input type="text" name='image' id='image' />

            <label htmlFor="hasGluten">Name</label>
            <input type="checkbox" name='hasGluten' id='hasGluten' />
            <br />
            <input type="submit" />
        </form>
        <div className="backButton">
            <a href="/breads">
                <button>Go back to the index</button>
            </a>
        </div>

      </Default>
    )
}

module.exports = New
