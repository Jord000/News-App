import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useEffect, useState } from 'react'
import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom'


const SortArticle = ({ sort, order, setOrder, setSort }) => {
  const navigate = useNavigate()

  const [isError, setIsError] = useState(false)
  let [searchParams, setSearchParams] = useSearchParams()
  let topic = searchParams.get('topic')
  if (topic === null) {
    topic = ''
  }


  const acceptedSorts = [
    'author',
    'title',
    'article_id',
    'topic',
    'created_at',
    'votes',
    'article_img_url',
    'comment_count',
  ]

  useEffect(() => {
    if (sort !== '') {
      navigateToSortBy(sort, order)
    }
  }, [sort, order])

  const sortSelect = (event) => {
    setSort(event.target.value)
    setIsError(false)
  }
  const sortOrder = (event) => {
    if (sort === '') {
      setIsError(true)
    } else {
      setOrder(event.target.value)
    }
  }

  const navigateToSortBy = (sort, order) => {
    navigate({
      pathname: '/myfeed',
      search: createSearchParams({
        topic,
        sort,
        order,
      }).toString(),
    })
  }

  return (
    <>
      <Box className="filter-article-box">
        <FormControl variant="standard" sx={{ minWidth: '100px' }}>
          <InputLabel >filter</InputLabel>
          <Select
            sx={{ minHeight: '40px' }}
            labelId="sort-by"
            id="sort-by"
            value={sort}
            onChange={sortSelect}
            label="sort"
            MenuProps={{ PaperProps: { sx: { minHeight: 50 } } }}
          >
            {/* <MenuItem value="">
              <em>None</em>
            </MenuItem> */}
            {acceptedSorts.map((sort) => {
              return (
                <MenuItem key={sort} value={sort}>
                  {sort.charAt(0).toUpperCase() +
                    sort.slice(1).replace(/_/g, ' ')}
                </MenuItem>
              )
            })}
          </Select>
        </FormControl>
      </Box>
      <Box className="order-article-box">
        <FormControl variant="standard" sx={{ minWidth: '70px' }}>
          <InputLabel>Order</InputLabel>
          <Select
            sx={{ minHeight: '40px' }}
            labelId="order-by"
            id="order-by"
            value={order}
            onChange={sortOrder}
            label="order"
          >
            <MenuItem key="ASC" value="ASC">
              Ascending
            </MenuItem>
            <MenuItem key="DESC" value="DESC">
              Descending
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
      {isError && (
        <p style={{ color: 'red', fontSize: '12px', marginLeft: 'auto' }}>
          please select a filter to sort
        </p>
      )}
    </>
  )
}

export default SortArticle