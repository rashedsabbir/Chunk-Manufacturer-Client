import { Disclosure } from '@headlessui/react'
import React from 'react'
import { ChevronUpIcon } from '@heroicons/react/solid'

export default function Example() {
  return (
    <div className="w-full px-4 pt-16 bg-menu1">
      <div>
        
        <button class="btn btn-primary text-4xl text-white mx-auto max-w-md rounded-lg bg-orange-600">
  Blogs
</button>
      </div>
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>How will you improve the performance of a React Application?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-left text-sm text-gray-500">
                <ul className="list-disc">
                  <li> Wherever possible, keep component state local.</li>
                  <li>Remembering React components to avoid excessive re-rendering.</li>
                  <li>React code splitting using dynamic import ().</li>
                  <li>React windowing or list virtualization.</li>
                  <li>React's lazy image loading.</li>
                </ul>

              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>What is a unit test? Why should write unit tests?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-left text-sm text-gray-500">
              Individual units or software components are tested during unit testing, which is a sort of software testing. Its goal is to ensure that each unit of code works as planned.
               <ul className='list-disc '>
                  <li>Unit tests that are well-written serve as documentation for your code. Any developer can easily understand the objective of your functions by looking at your tests.</li>
                  <li>It makes the debugging process easier.</li>
                  <li>Unit testing is an essential component of extreme programming. Extreme programming is a "test-everything-that-might-break" programming method.</li>
                  <li>Unit tests facilitate code reuse. If you wish to reuse old code in a new project, just migrate both the code and the tests to the new project, then run the tests to ensure you get the required results.</li>
                </ul>

              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>What are the different ways to manage a state in a React application?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-left text-sm text-gray-500">
              When discussing state in our apps, we must be clear about which forms of state are relevant. There are four sorts of state that you must handle appropriately in your React apps: 
              <ul className='list-disc'>
                <li>Local government</li>
                <li>Server state </li>
                <li>Global state</li>
                <li>URL state</li>
              </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>How does prototypical inheritance work?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-left text-sm text-gray-500">
              Many JavaScripters appear to believe that by adding "prototypal" to "inheritance," they can fundamentally alter the long-standing definition of "inheritance," but I completely disagree. Trying to do so, in my opinion, is akin to comparing an apple to an orange and saying, "No, no, that's not an apple, that's just a red orange." I believe an apple should be called an apple and an orange an orange. Inheritance exists in class-oriented languages. JS and other object-oriented languages support behavior delegation. They are two distinct systems with essentially opposing effects. They result in significantly distinct patterns for modeling jobs. The most confusion arises when attempting to employ intentionally confused terminology such as "prototypal inheritance" while pretending that the reverse of the common meaning of the word is acceptable.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Why you do not set the state directly in React?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-left text-sm text-gray-500">
              Because of the following reasons, one should never directly change the state:
              <ul className='list-disc'>
                <li>If you directly alter it, invoking setState() afterward may simply replace the update you did.</li>
                <li>When you directly update the state, it does not immediately modify this.state. Instead, it produces a pending state transition, which can only be accessed after using this function.</li>
                <li>You will lose control of all components' states.</li>
              </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left
               font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>How will you implement a search to find products by name from array of products?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-left text-sm text-gray-500">
              To find products by name, you can apply these methods:
                <ul className='list-disc'>
                  <li>The indexOf() method returns the first index of a value in an array. If there is no match, the method returns -1.</li>
                  <li>The find() method returns the first value in an array that matches the conditions of a function. If there is no match, the method returns undefined.</li>
                  <li>The filter() method returns a new array of all the values in an array that matches the conditions of a function. If there is no match, the method returns an empty array.</li>
                </ul>
              </Disclosure.Panel>
              
            </>
          )}
        </Disclosure>
      </div>
    </div>
  )
}
