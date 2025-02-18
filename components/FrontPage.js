import Link from 'next/link'
import Masonry from '@mui/lab/Masonry';
import ConvertMarkdown from './ConvertMarkdown'
import React from 'react';
import ReactDOM from 'react-dom';
import ClassFacilitator from './ClassFacilitator';
import Button from '@mui/material/Button';

export default function FrontPage(currentFile, allFiles,
  //  facilitatorOpen, setFacilitatorOpen
) {
  // create an object that represents an item on the front page, which could be an author box, facilitator, recommended reading, etc.
  //  That will then be rendered in the front page

console.log(currentFile)

  const description = currentFile.description
  const title = currentFile.title
  const prerequisites = currentFile.prerequisites || []

  const formattedDependencies = Object.keys(prerequisites).map(key => {
    const items = prerequisites[key]
    const addLinktoItems = Object.keys(items).map(key => {
      const item = items[key]

      const allItems = {
        title: key,
        description: item.description,
        required: item.required,
        recommended: item.recommended,
        // link: which ? `/${which.itemPath}` : '#'
      }
      return allItems
    })
    return addLinktoItems[0]
  })

  const formedDeps =
    formattedDependencies.map(dep => {
      const workshopObject = dep
      const workshopHtmldescription = ConvertMarkdown(workshopObject.description)
      const required = workshopObject.required
      const recommended = workshopObject.recommended
      const requiredOrRecommended = required ? 'required' : recommended ? 'recommended' : ''
      return (
        <div className='frontpage-item dependency' key={dep.title}>
          <h2>{dep.title}</h2>
          <p className={requiredOrRecommended}>
            {/* <Link href={workshopObject.link}>{item.title}</Link> */}
            <p>{workshopHtmldescription}</p>
          </p>
        </div>
      )
    })

  // all objects in currentFile
  const allObjects = Object.keys(currentFile).map(key => {
    const item = currentFile[key]
    // if object name is 'prerequisites' or 'workshops' or 'insights' or 'installations' or 'description' or 'title' or 'cover_image', don't add to list
    if (key === 'prerequisites' || key === 'workshops' || key === 'insights' || key === 'installations' || key === 'description' || key === 'title' || key === 'cover_image' || key === 'content' || key === 'slug'
      || key === 'path' || key === 'itemPath' || key === 'programming_language') {
      return null
    }
    return {
      title: key,
      items: item
    }
  })

  const formattedObjects = allObjects.
    filter(item => item !== null).map(obj => {
      return (
        <div className="frontpage-item" key={obj.title}>
          <h2>{obj.title}</h2>
          <ul>
            {obj.items && Object.keys(obj.items).map(key => {
              const item = obj.items[key]
              // if there's a description, show it
              if (key === 'description') {
                const description = ConvertMarkdown(item)
                return (
                  <li key={key}>
                    <p>{description}</p>
                  </li>
                )
              }
              if (key === 'projects') {
                // console.log(item)
              }
              // if (obj.title === 'facilitators') {
              //   const facilitator = authors.find(author => author.title === item);
              //   const facilitatorPath = facilitator ? `/authors/${facilitator.slug}` : '#';
              //   const facilitatorList = {
              //     name: item,
              //     value: facilitatorPath
              //   };

              // let bio = '';
              // if (key === 'description') {
              //   bio = item;
              // };

              //   return (
              //     <li key={facilitatorList.name}>
              //       <Button onClick={handleOpen}>
              //         {facilitatorList.name}
              //       </Button>
              //     </li>
              //   );
              // }

              // if (obj.title === 'authors') {
              //   const author = authors.find(author => author.title === item)
              //   const authorPath = author ? `/authors/${author.slug}` : '#'
              //   const authorList = {
              //     key: item,
              //     value: authorPath
              //   }
              //   return (
              //     <li key={key} className='authors-list'>
              //       <Link href={authorList.value}>{authorList.key}</Link>
              //     </li>
              //   )
              // }

              // if (obj.title === 'editors') {
              //   const editor = authors.find(author => author.title === item)
              //   const editorPath = editor ? `/authors/${editor.slug}` : '#'
              //   const editorList = {
              //     key: item,
              //     value: editorPath
              //   }
              //   return (
              //     <li key={key} className='authors-list'>
              //       <Link href={editorList.value}>{editorList.key}</Link>
              //     </li>
              //   )
              // }
              if (typeof item === 'string') {
                const itemHtml = ConvertMarkdown(item)
                return (
                  <li key={key} className='frontpage-list'>
                    {itemHtml}
                  </li>
                )
              }
              if (typeof item === 'object' && item !== null) {
                if (item?.link || item['workshop prerequisites']) {
                  const itemHtml = ConvertMarkdown(item.description)
                  return (
                    <li key={key}>
                      <a href={item.link}>{key}</a>
                      {<p>{itemHtml}</p>}
                    </li>
                  )
                }
                if (item?.description) {
                  const itemHtml = ConvertMarkdown(item.description)
                  return (
                    <li key={key}>
                      <p>{itemHtml}</p>
                    </li>
                  )
                }
                try {
                  return (
                    <div key={key}>
                      {Object.keys(item).map(key => {
                        // console.log(key)
                        const term = ConvertMarkdown(item[key].description)
                        return (
                          <div key={key}>
                          <h3><a href={item[key].link}>{key}</a></h3>
                          <p key={key} className='frontpage-list'>{term}</p>
                          </div>
                        )
                      })}
                    </div>
                  )
                } catch (error) {
                  console.log(error)
                }
              }
            })}
          </ul>
        </div>
      )
    })
  // check if formattedObjects or formattedDeps is empty, if so, return null
  const formatted = formattedObjects.length === 0 && formedDeps.length === 0 ? true : false

  return (
    <div className="frontpage">
      <h1>{title}</h1>
      {description && <div className="description">
        <p>{description}</p></div>}
      {!formatted && <Masonry columns={{ sm: 1, md: 2 }} spacing={2}>
        {formedDeps}
        {formattedObjects}
      </Masonry>}
      {/* <ClassFacilitator
      name={'facilitatorList.name'}
      bio={'bio'}
      // facilitatorOpen={facilitatorOpen}
      handleClose={handleClose}
    /> */}
    </div>

  )
}