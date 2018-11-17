import { CLIENT_ORDER_CREATE } from '../types/orders';
import {orders} from '../api';

const createOrder = (order) => ({
    type : CLIENT_ORDER_CREATE,
    order
})


export default create = () => dispatch => {
    orders.createOrder().then((order) => {
        dispatch(createOrder())
    })
} 