import { Form, Stack, Row, Col, Button } from 'react-bootstrap'
import { Link, Navigate } from 'react-router-dom'
import CreatabalReactSelect from 'react-select/creatable'
import { useRef, useState } from 'react'
import { NoteData, Tag } from './App'

type NoteFormProps = {
  onSubmit: (data: NoteData) => void
}

const NoteForm = ({ onSubmit }: NoteFormProps) => {
  const titleRef = useRef<HTMLInputElement>(null)
  const markdownRef = useRef<HTMLTextAreaElement>(null)
  // const [selectedTags, selectedTags] = useState<Tag[]>([])

  const handleSubmit = (e: any) => {
    e.preventDefault()

    onSubmit({
      title: titleRef.current!.value,
      markdown: markdownRef.current!.value,
      tags: [],
    })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={4}>
        <Row>
          <Col>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control ref={titleRef} required />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="tags">
              <Form.Label>Tags</Form.Label>
              <CreatabalReactSelect isMulti />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="markDown">
          <Form.Label>Body</Form.Label>
          <Form.Control ref={markdownRef} required as="textarea" rows={15} />
        </Form.Group>
        <Stack direction="horizontal" gap={2} className="justify-content-end">
          <Button variant="primary">Save</Button>
          {/* bring back one step */}
          <Link to="..">
            <Button variant="outline-secondary">Cancel</Button>
          </Link>
        </Stack>
      </Stack>
    </Form>
  )
}

export default NoteForm
