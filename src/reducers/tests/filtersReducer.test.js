import { filtersReducer } from "../"

describe("filtersReducer",() => {

    describe('uses CLEAR_FILTER to', () => {
        const state = {
            aType: ['aFilter'],
            bType: ['bFilter1', 'bFilter2']
        }
        const action = { type: "CLEAR_FILTER" }
      
        it('remove a filter', () => {
          action.filterType = 'aType'
          expect(filtersReducer(state, action)).toEqual({
              'aType': [],
              'bType': ['bFilter1', 'bFilter2']
          })
        })
      
        it('remove two filters', () => {
          action.filterType = 'bType'
          expect(filtersReducer(state, action)).toEqual({
              'aType': ['aFilter'],
              'bType': []
          })
        })
      }) // clear filter end


      describe('uses TOGGLE_FILTER to', () => {
        const state = {
            aType: ['aFilter']
        }
      
        it('add a new filter', () => {
          const action = {
            type: "TOGGLE_FILTER",
            filterType: 'aType',
            filterValue: 'anotherFilter'
          }
          expect(filtersReducer(state, action)).toEqual({
            "aType": ["aFilter", "anotherFilter"]
          })
        })
      
        it('remove existing filter', () => {
          const action = {
            type: "TOGGLE_FILTER",
            filterType: 'aType',
            filterValue: 'aFilter'
          }
          expect(filtersReducer(state, action)).toEqual({
            "aType": []
          })
        })
      })


})

// import { CLEAR_FILTER, TOGGLE_FILTER } from '../constants'

// const initialFilters = {
//   categories: [],
//   colors: []
// }

// const filtersReducer = (state = initialFilters, action) => {
//   switch (action.type) {
//     case CLEAR_FILTER:
//       const clearedFilters = {...state}
//       clearedFilters[action.filterType] = []
//       return clearedFilters

//     case TOGGLE_FILTER:
//       const {filterValue} = action
//       const filterValues = state[action.filterType]

//       const newfilterValues = filterValues.filter(
//         item => item !== filterValue
//       )

//       if (newfilterValues.length === filterValues.length) {
//         newfilterValues.push(filterValue)
//       }

//       const newActiveFilters = {...state}
//       newActiveFilters[action.filterType] = newfilterValues

//       return newActiveFilters

//     default:
//       return state
//   }
// }

// export default filtersReducer