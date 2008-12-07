// Bunch of convience methods for element collections.
Object.extend(Enumerable, {
  observe: function(event_name, handler) {
    return this.invoke('observe', event_name, handler);
  },
  
  stopObserving: function(event_name, handler) {
    return this.invoke('stopObserving', event_name, handler);
  },
  
  show: function() {
    return this.invoke('show');
  },
  
  hide: function() {
    return this.invoke('hide');
  },
  
  addClassName: function(class_name) {
    return this.invoke('addClassName', class_name);
  },
  
  removeClassName: function(class_name) {
    return this.invoke('removeClassName', class_name);
  },

  toggleClassName: function(class_name) {
    return this.invoke('toggleClassName', class_name)
  },
 
  remove: function() {
    return this.invoke('remove');
  },
  
  replace: function(content) {
    return this.invoke('replace', content);
  },
  
  toggle: function() {
    return this.invoke('toggle');
  },
  
  insert: function(content) {
    return this.invoke('insert', content);
  },
  
  update: function(content) {
    return this.invoke('update', content);
  },
  
  setInnerHTML: function(content) {
    this._each(function(element) {
      element.innerHTML = content;
    });
    return this;
  },
  
  writeAttribute: function(attribute, value) {
    return this.invoke('writeAttribute', value);
  },
  
  wrap: function(wrapper) {
    return this.invoke('wrap', wrapper);
  },
  
  check: function() {
    return this.invoke('check');
  },
  
  uncheck: function() {
    return this.invoke('uncheck');
  },
  
  checked: function() {
    return Selector.pseudos.checked(this);
  },
  
  unchecked: function() {
    this.select(function(element) {
      return element.checked;
    });
  },
  
  not: function(selector) {
    return Selector.pseudos.not(this, selector);
  },
  
  empty: function() {
    return Selector.pseudos.empty(this);
  },
  
  enabled: function() {
    return Selector.pseudos.enabled(this);
  },
  
  disabled: function() {
    return Selector.pseudos.disabled(this);
  },
  
  setStyle: function(styles) {
    return this.invoke('setStyle', styles);
  },

  extendWithJSONParameters: function(attr_name) {
    return this.invoke('extendWithJSONParameters', attr_name);
  }
  
});
    
Object.extend(Array.prototype, Enumerable);

Element.addMethods('INPUT', {
  check: function() {
    this.checked = true;
  }, 
  
  uncheck: function() {
    this.checked = false;
  },
});

Element.addMethods({
  extendWithJSONParameters: function(element, attr_name, sanitize) {
    var json = element.readAttribute(attr_name || 'parameters')
    json && Object.extend(element, json.evalJSON(sanitize)); 
    return element;
  },  
});

