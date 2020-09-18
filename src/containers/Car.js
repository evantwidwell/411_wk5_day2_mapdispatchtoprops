import { connect } from 'react-redux'
import Car from '../components/Car'

const mapStateToProps = (state) => {
    return {
        listings: state.listings
    }
}

export default connect(mapStateToProps)(Car)
