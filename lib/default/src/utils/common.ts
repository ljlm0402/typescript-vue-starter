/* eslint-disable */
window.commonUtils = (commonUtils => {
  /**
     * @return {String}
     * @description Global variable
     * @example commonUtils
     */
  commonUtils = {
    API: {
      USER: '/users'
    },
    AUTH: {
      ADMIN: 'ADMIN',
      USER: 'USER'
    },
    URL: (() => {
      let url = ''

      if (location.hostname === 'localhost') {
        url = 'http://localhost:3000'
      }

      return url
    })(),

    getBrowser () {
      const agent = navigator.userAgent.toLowerCase()

      if (agent.indexOf('chrome') !== -1) {
        return 'Chrome'
      }
      if (agent.indexOf('opera') !== -1) {
        return 'Opera'
      }
      if (agent.indexOf('staroffice') !== -1) {
        return 'Star Office'
      }
      if (agent.indexOf('webtv') !== -1) {
        return 'WebTv'
      }
      if (agent.indexOf('beonex') !== -1) {
        return 'Beonex'
      }
      if (agent.indexOf('chimera') !== -1) {
        return 'Chimera'
      }
      if (agent.indexOf('netpositive') !== -1) {
        return 'NetPositive'
      }
      if (agent.indexOf('phoenix') !== -1) {
        return 'Phoenix'
      }
      if (agent.indexOf('firefox') !== -1) {
        return 'Firefox'
      }
      if (agent.indexOf('safari') !== -1) {
        return 'Safari'
      }
      if (agent.indexOf('skipstone') !== -1) {
        return 'SkipStone'
      }
      if (agent.indexOf('msie') !== -1) {
        return 'Internet Explorer'
      }
      if (agent.indexOf('netscape') !== -1) {
        return 'Netscape'
      }
      if (agent.indexOf('mozilla/5.0') !== -1) {
        return 'Mozilla'
      }
    }
  }

  /**
   * @namespace commonUtils.str
   * @description String handling functions
   */
  commonUtils.str = {
    /**
     * @param {String} str
     * @return {String}
     * @description Remove blank string
     * @example commonUtils.str.rmBlank(str)
     */
    rmBlank (str: string): string {
      return str.replace(/\s/gi, '')
    },

    /**
     * @param {String} str
     * @return {Boolean}
     * @description Check blank string
     * @example commonUtils.str.isBlank(str)
     */
    isBlank (str: string): boolean {
      for (let i = 0, len = str.length; i < len; i++) {
        const c = str.charAt(i)
        if (c !== '' && c !== '\n' && c !== 'et') return false
      }
      return true
    }
  }

  /**
   * @namespace commonUtils.num
   * @description Number handling functions
   */
  commonUtils.num = {
    /**
     * @param {String | Number} value
     * @return {String}
     * @description Numeric unit return
     * @example commonUtils.num.addComma(value)
     */
    addComma (value: string | number): string {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
  }

  /**
   * @namespace commonUtils.obj
   * @description Object handling functions
   */
  commonUtils.obj = {
    /**
     * @param {Any} obj
     * @param {String} newName
     * @param {String} oldName
     * @return {Any}
     * @description Rename object key
     * @example commonUtils.obj.rename(obj, newName, oldName)
     */
    rename (obj: any, newName: string, oldName: string): any {
      obj[oldName] = obj[oldName] || ''
      Object.defineProperty(obj, newName, Object.getOwnPropertyDescriptor(obj, oldName) as PropertyDescriptor)
      delete obj[oldName]
      return obj
    },

    /**
     * @param {Any} obj
     * @return {Any}
     * @description Merge object by value
     */
    merge (obj: any): any {
      return Object.keys(obj).reduce((acc, k) => ((acc[obj[k]] = [...(acc[obj[k]] || []), k]), acc), {})
    }

  }

  /**
   * @namespace commonUtils.arr
   * @description Array handling functions
   */
  commonUtils.arr = {

  }

  /**
   * @namespace commonUtils.valid
   * @description Validation handling functions
   */
  commonUtils.valid = {
    /**
     * @param {Any} value
     * @return {Boolean}
     * @description Value validation
     * @example commonUtils.valid.value(value)
     */
    value (value: any): boolean {
      if (value === null) {
        return false
      } else if (typeof value !== 'number' && value === '') {
        return false
      } else if (value === 'undefined' || value === undefined) {
        return false
      } else if (value !== null && typeof value === 'object' && !Object.keys(value).length) {
        return false
      }

      return true
    },

    /**
     * @param {String} str
     * @return {Boolean}
     * @description Number validation
     * @example commonUtils.valid.number(str)
     */
    number (str: string): boolean {
      const RegExp = /^[0-9]+$/
      if (RegExp.test(str)) return true
      return false
    },

    /**
     * @param {String} str
     * @return {Boolean}
     * @description Korean validation
     * @example commonUtils.valid.korean(str)
     */
    korean (str: string): boolean {
      const RegExp = /^[가-힣\s]+$/
      if (RegExp.test(str)) return true
      return false
    },

    /**
     * @param {String} str
     * @return {Boolean}
     * @description English validation
     * @example commonUtils.valid.english(str)
     */
    english (str: string): boolean {
      const RegExp = /^[a-zA-z\s]+$/
      if (RegExp.test(str)) return true
      return false
    },

    /**
     * @param {String}
     * @return {Boolean}
     * @description Email validation
     * @example commonUtils.valid.email(str)
     */
    email (str: string): boolean {
      const RegExp = /^[0-9a-zA-z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
      if (RegExp.test(str)) return true
      return false
    },

    /**
     * @param {String}
     * @return {Boolean}
     * @description Password validation
     * @example commonUtils.valid.password(str)
     */
    password (str: string): boolean {
      const RegExp = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/
      if (RegExp.test(str)) return true
      return false
    }
  }

  /**
   * @namespace commonUtils.auth
   * @description Authority handling functions
   */
  commonUtils.auth = {
    /**
     * @return {String}
     * @description Get user auth
     */
    get (): string {
      return sessionStorage.auth || 'ADMIN'
    },

    /**
     * @param {Number} level
     * @return {Boolean}
     * @description Verification meta level auth
     * @example commonUtils.auth.meta(level)
     */
    meta (level: number): boolean {
      const auth = this.get()
      let show = false

      switch (level) {
        case 10:
          if (auth === commonUtils.AUTH.ADMIN) {
            show = true
          } else {
            show = false
          }
          break
        default:
          show = true
          break
      }
      return show
    },

    /**
     * @param {String} url
     * @return {Boolean}
     * @description Verification route auth
     * @example commonUtils.auth.route(url)
     */
    route (url: string): boolean {
      const auth = this.get()
      let show = false

      if (url.indexOf('/admin/') > -1) {
        if (auth === commonUtils.AUTH.ADMIN) {
          show = true
        } else {
          show = false
        }
      } else {
        show = true
      }
      return show
    },

    /**
     * @return {Object}
     * @example Verification menu auth
     * @example commonUtils.auth.menu()
     */
    menu (): { admin: boolean; user: boolean } {
      const auth = this.get()
      let show = {
        admin: false,
        user: false
      }

      if (auth === commonUtils.AUTH.ADMIN) {
        show = {
          admin: true,
          user: true
        }
      } else if (auth === commonUtils.AUTH.USER) {
        show = {
          admin: false,
          user: true
        }
      }
      return show
    }
  }

  return commonUtils
})(window.commonUtils || {})
