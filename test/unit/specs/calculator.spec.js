import Vue from 'vue';
import Calculator from '@/components/Calculator';

describe('Calculator.js', () => {
    it('should be return the calculator', () => {
        const Constructor = Vue.extend(Calculator);
        const vm = new Constructor().$mount()
        expect(vm.$el.querySelector('.container .calculator').textContent).to.equal('Welcome to Calculator component');
    })
})