import { mount } from '@vue/test-utils'
import SingleBooking from '@/components/SingleBooking.vue'

describe('SingleBooking.vue', () => {
    const wrapper = mount(SingleBooking, { 
        propsData: {
            initialBooking: {
                _id: 1,
                name: "test name",
                location: "test location",
                rating: 5,
                berthing: "2 adults 2 children & 1 infant",
                dates: "3rd July 2019 for 7 days",
                departing: "East Midlands",
                price: 1136.5,
                overview: "overview text",
                img: "hotel-image-1",
            }
          }
        })

  it('renders component and sets data from props', async () => {
    expect(wrapper.vm.booking.name).toBe('test name')
    expect(wrapper.vm.booking.location).toBe('test location')
    expect(wrapper.vm.booking.rating).toBe(5)
  })
  it('checks that the currency converted works', async () => {
    expect(wrapper.vm.convertToPounds(12345)).toBe('£12,345.00')
  })
  it('checks that the toggleCollapsable works', async () => {
    wrapper.setData({copy:'more'})
    expect(wrapper.vm.copy).toBe('more')
    await wrapper.vm.toggleCollapsable()
    expect(wrapper.vm.copy).toBe('less')
  })
})
