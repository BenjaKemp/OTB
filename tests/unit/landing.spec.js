import {
  mount
} from '@vue/test-utils'
import Landing from '@/components/Landing.vue'
import SortMenu from '@/components/SortMenu.vue'
import SingleBooking from '@/components/SingleBooking.vue'

describe('Landing.vue', () => {

  it('renders component along with children', () => {
    const wrapper = mount(Landing)
    const sortMenu = wrapper.findComponent(SortMenu)
    expect(sortMenu.exists()).toBe(true)
    const single = wrapper.findComponent(SingleBooking)
    expect(single.exists()).toBe(true)
  })
  it('sorts the bookings by price', async () => {
    const wrapper = mount(Landing)
    wrapper.setData({
      bookings: [{
        price: 2
      }, {
        price: 3
      }, {
        price: 1
      }],
      sortField: "alpha",
    })
    wrapper.setData({
      sortField: 'price'
    })
    expect(wrapper.vm.orderedBookings).toMatchObject([{
      price: 3
    }, {
      price: 2
    }, {
      price: 1
    }])
  })
  it('sorts the bookings alphabetically', async () => {
    const wrapper = mount(Landing)
    wrapper.setData({
      bookings: [{
        name: 'Gamma'
      }, {
        name: 'Alpha'
      }, {
        name: 'Beta'
      }],
      sortField: 'price',
    })
    wrapper.setData({
      sortField: 'alph'
    })
    expect(wrapper.vm.orderedBookings).toMatchObject([{
      name: "Alpha"
    }, {
      name: "Beta"
    }, {
      name: "Gamma"
    }])
  })
  it('sorts the bookings by the rating', async () => {
    const wrapper = mount(Landing)
    wrapper.setData({
      bookings: [{
        rating: 3
      }, {
        rating: 1
      }, {
        rating: 2
      }],
      sortField: 'price',
    })
    wrapper.setData({
      sortField: 'star'
    })
    expect(wrapper.vm.orderedBookings).toMatchObject([{
      rating: 3
    }, {
      rating: 2
    }, {
      rating: 1
    }])
  })
})