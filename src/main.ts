import { Breadcrumbs } from './recursion/Breadcrumbs/Breadcrumbs';
import { routes } from './recursion/Breadcrumbs/description';
import { sum2020, sum2020Part2, sum2020Part3, getThreeValues } from './AdventOfCode/Day1'
import { input, routes } from './utils'

const path = '/about/consultations/collaboration'
const BreadCrumb = Breadcrumbs(routes, path)

// console.log("BreadCrumb", BreadCrumb)
const Day1Part1 = sum2020(input, 2020)
const Day1Part2 = sum2020Part2(input, 2020)
const Day1Part3 = sum2020Part3()
const Day1Part4 = getThreeValues()
const SearchRoutes = searchRoutes(routes, "/about/consultations/details")

console.log(SearchRoutes, "SearchRoutes")
window.onload = routes;
