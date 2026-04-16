//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

const outcomesData = require('./data/outcomes.json')
const outcomesTableData = require('./data/outcomes-table.json')

router.use((req, res, next) => {
  res.locals.currentPath = req.path
  next()
})

router.get('/outcomes', (req, res) => {
  const env = req.app.get('nunjucksEnv')
  const priorities = outcomesData.sosSection.secretaryOfStatePriorities

  const sosAccordionItems = priorities.map((priority) => {
    const count = priority.outcomes.length
    const summary = `${priority.pillarShortLabel} · ${count} outcome${count !== 1 ? 's' : ''}`

    return {
      heading: { text: `${priority.pillarIndex}. ${priority.title}` },
      summary: { text: summary },
      content: {
        html: env.render('outcomes/partials/priority-body.html', {
          priority,
          eipNoteText: outcomesData.eipNoteText
        })
      }
    }
  })

  const resilienceOutcomes = outcomesData.resilienceSection.outcomes
  const resilienceAccordionItems = resilienceOutcomes.map((outcome, index) => ({
    heading: { text: `${index + 1}. ${outcome.text}` },
    content: {
      html: env.render('outcomes/partials/resilience-outcome-body.html', {
        outcome,
        eipNoteText: outcomesData.eipNoteText
      })
    }
  }))

  res.render('outcomes/index.html', {
    outcomes: outcomesData,
    sosAccordionItems,
    resilienceAccordionItems,
    resilienceOutcomeCount: resilienceOutcomes.length
  })
})

router.get('/outcomes-static', (req, res) => {
  res.render('outcomes/static.html', {
    outcomes: outcomesData,
    priorities: outcomesData.sosSection.secretaryOfStatePriorities,
    resilienceOutcomes: outcomesData.resilienceSection.outcomes,
    resilienceOutcomeCount: outcomesData.resilienceSection.outcomes.length
  })
})

router.get('/outcomes-table', (req, res) => {
  const tableRows = outcomesTableData.rows.map((row) => ([
    { text: String(row[0]) },
    { text: row[1] },
    { text: row[2] },
    { text: row[3] },
    { text: row[4] }
  ]))

  res.render('outcomes/table.html', {
    tableData: outcomesTableData,
    tableRows
  })
})
