import { mount } from '@vue/test-utils'
import Landing from '@/components/Landing.vue'
import SortMenu from '@/components/SortMenu.vue'
import SingleBooking from '@/components/SingleBooking.vue'

describe('Landing.vue', () => {

  it('checks that child components are rendered on landing as parent', () => {
    const wrapper = mount(Landing)
    const sortMenu = wrapper.findComponent(SortMenu) 
    expect(sortMenu.exists()).toBe(true)
    const single = wrapper.findComponent(SingleBooking) 
    expect(single.exists()).toBe(true)
  })
})
