//saving on the HTML
//select the input
const sentenceTag = document.querySelector('input[type="text"]')

const typesizeTag = document.querySelector('input[name="typesize"]')
const typesizeOutput = document.querySelector('span.typesize-output')

const lineheightTag = document.querySelector('input[name="lineheight"]')
const lineheightOutput = document.querySelector('span.lineheight-output')

const fontweightTag = document.querySelector('input[name="fontweight"]')
const fontweightOutput = document.querySelector('span.fontweight-output')

const italicTag = document.querySelector('input[name="italic"]')
const typefaceTag = document.querySelector('select[name="typeface"]')

const colorTags = document.querySelectorAll('div.colors div')

const outputTag = document.querySelector('textarea.output')
//save the text
const originalText = outputTag.value

//when i type in my sentence tag, update the output accordingly
//if there is no value, put the original text
sentenceTag.addEventListener('keyup', function() {
  //value is hidden in the HTML but present
  //outputTag.innerHTML = this.value
  if (this.value) {
    outputTag.value = this.value
  } else {
    outputTag.value = originalText
  }
})

//when i update the output tag, update the sentence tag accordingly
outputTag.addEventListener('keyup', function() {
  sentenceTag.value = this.value
})

//when i change my typesize slider, update the text next to me AND
//change the outputTag's font size
typesizeTag.addEventListener('input', function() {
  //change the CSS
  outputTag.style.fontSize = this.value + 'px'
  //change the HTML
  typesizeOutput.innerHTML = this.value + 'px'
})
//when i change my fontweight slider, update the text next to me AND
//change the outputTag's font weight
fontweightTag.addEventListener('input', function() {
  //change the CSS
  outputTag.style.fontWeight = this.value
  //change the HTML
  fontweightOutput.innerHTML = this.value
})

lineheightTag.addEventListener('input', function() {
  outputTag.style.lineHeight = this.value
  lineheightOutput.innerHTML = this.value
})

//when i change my italic checkbox, update the font style to either
//normal or italic if it's checked or not
italicTag.addEventListener('change', function() {
  if (this.checked) {
    outputTag.style.fontStyle = 'italic'
  } else {
    outputTag.style.fontStyle = 'normal'
  }
})

//when i change my select for typeface, update the font family
typefaceTag.addEventListener('input', function() {
  outputTag.style.fontFamily = this.value
})

//go through my color tags, then...
//when i click one of them, change the background color
//and the text color, and  make this tag be selected
colorTags.forEach(tag => {
  tag.addEventListener('click', function() {
    outputTag.style.backgroundColor = this.style.backgroundColor
    outputTag.style.color = this.style.color

    //reset the classes
    colorTags.forEach(tag => {
      tag.classList.remove('selected')
    })
    //only to this clicked ones
    this.classList.add('selected')
  })
})
