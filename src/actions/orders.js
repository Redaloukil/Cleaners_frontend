import { CREATE_ORDER_CLIENT , DELETE_ORDER_CLIENT } from '../types/types';
import {orders} from '../api';

const createOrder = (order) => ({
    type : CREATE_ORDER_CLIENT,
    order
})

const modifyOrder = (order) => ({
    type : CLIENT_ORDER_MODIFY,
    order
})

const deleteOrder = (order) => ({
    type : DELETE_ORDER_CLIENT,
    order
})


export default createOrderClient = () => dispatch => {
    orders.createOrder().then((order) => {
        dispatch(createOrder(order));
    })
}

export default deleteOrderClient = () => dispatch => {
    orders.deleteOrder().then((order) => {
        dispatch(deleteOrder(order));
    })
}