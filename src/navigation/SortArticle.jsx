import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useState } from 'react'
import { createSearchParams, useNavigate } from 'react-router-dom'

const SortArticle = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const navigate = useNavigate()
  const [allTopics, setAllTopics] = useState([])
  const [sort, setSort] = useState('')

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

  const sortSelect = (event) => {

    setSort(event.target.value)
    console.log(sort)
  }

  const navigateToSortBy = (sort) => {
    navigate({
      pathname: '/myfeed',
      search: createSearchParams({
        sort,
      }).toString(),
    })
  }

  return (
    <Box className="filter-article-box">
      <FormControl variant="standard" sx={{ minWidth: '100px' }}>
        <InputLabel>filter</InputLabel>
        <Select
          labelId="sort-by"
          id="sort-by"
          value={sort}
          onChange={sortSelect}
          label="sort"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
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
  )
}

export default SortArticle
