import { mount } from '@vue/test-utils'
import SortMenu from '@/components/SortMenu.vue'

describe('SortMenu.vue', () => {

  it('renders props.msg when passed', async () => {
    const wrapper = mount(SortMenu)
    const image = await wrapper.vm.iconPathSVG('sort-alpha-down-solid')
    console.log('this is image    ',image)



  })
  it('checks that setFilter sets the filter and emits the value  ', async () => {
    const wrapper = mount(SortMenu)
    wrapper.setData({ active:'price' } )
    await wrapper.vm.setFilter('alph')
    expect(wrapper.vm.active).toBe('alph')
    const emitted = wrapper.emitted()
    expect(emitted['change-filter-type']).toBeTruthy()
    expect(emitted['change-filter-type'].length).toBe(1)
    expect(emitted['change-filter-type'][0]).toEqual(['alph'])
  })
})
