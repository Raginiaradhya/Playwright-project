import {test,expect, request} from '@playwright/test'
import { log } from 'console'
const token='reqres-free-v1'
const url='https://reqres.in/api'
test('create user', async ({request})=>
{
    const response=await request.post('https://reqres.in/api/users',{
        headers: {
      //'Content-Type': 'application/json',
      'x-api-key': `${token}`
    },
        data:

        {
    "name": "morpheus",
    "job": "leader"
        }
     
      })
    
  expect(response.status()).toBe(201);

  const body = await response.json();
  console.log(body);

  expect(body.name).toBe("morpheus");
  expect(body.job).toBe("leader");
  expect(body.id).toBeTruthy();

}
)

test('fetch user',async({request})=>
{
   const response= await request.get(`${url}/users/2`,{
    headers:
    {
      'x-api-key':`${token}`
    }
   })
   console.log(await response.status())
   await expect(response.status()).toBe(200)
   console.log(await response.json())
   


})
test('update resource',async({request})=>
{
  const response= await request.put(`${url}/users/2`,{
    headers:
    {
      'x-api-key':`${token}`
    },
    data:
    {
      
    "name": "morpheus",
    "job": "zion resident"
    }
  })
  console.log(await response.status());
  await expect(response.status()).toBe(200)
  console.log(await response.json());
  
})
test('patch',async({request})=>
{
  const patchresponse= await request.patch(`${url}/users/2`,
    {
      headers:
      {
        'x-api-key':`${token}`
      },
      data:
      {
        "name": "morpheus",
        "job": "poni resident"
      }
    }
  )
  console.log(await patchresponse.status());
  await expect(patchresponse.status()).toBe(200)
  console.log(await patchresponse.json())
  
})
test('delete resource',async({request})=>
{
  const response= await request.delete(`${url}/users/2`,
    {
      headers:{
        'x-api-key':`${token}`
      }
    }
  )
  console.log(await response.status())
  await expect(response.status()).toBe(204)
  //console.log(await response.json());
  
})