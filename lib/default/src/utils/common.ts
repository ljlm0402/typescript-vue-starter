window.commonUtils = (commonUtils => {
  /**
     * @return {String}
     * @description 전역변수
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
    })()
  }

  //= =================================================//

  /**
     * @namespace commonUtils.string
     * @description 문자열 처리 관련 함수
     */
  commonUtils.string = {
    /**
       * @param {String}
       * @return {Boolean}
       * @description 문자열 값 유무
       * @example commonUtils.string.isValue(str)
       */
    isValue (str: string): boolean {
      if (str === null || str === '' || str === 'undefined' || str === undefined || this.isBlank(str)) return false
      return true
    },

    /**
       * @param {String}
       * @return {Boolean}
       * @description 빈 문자 유무
       * @example commonUtils.string.isBlank(str)
       */
    isBlank (str: string): boolean {
      for (let i = 0; i < str.length; i++) {
        const c = str.charAt(i)
        if (c !== '' && c !== '\n' && c !== 'et') return false
      }
      return true
    }
  }

  //= =================================================//

  /**
     * @namespace commonUtils.number
     * @description 숫자 처리 관련 함수
     */
  commonUtils.number = {}

  //= =================================================//

  /**
     * @namespace commonUtils.valid
     * @description 유효성 관련 함수
     */
  commonUtils.valid = {
    /**
       * @param {String}
       * @return {Boolean}
       * @description 숫자 유효성 검증
       * @example commonUtils.valid.number(str)
       */
    number (str: string): boolean {
      const RegExp = /^[0-9]+$/
      if (RegExp.test(str)) return true
      return false
    },

    /**
       * @param {String}
       * @return {Boolean}
       * @description 한글 유효성 검증
       * @example commonUtils.valid.korean(str)
       */
    korean (str: string): boolean {
      const RegExp = /^[가-힣\s]+$/
      if (RegExp.test(str)) return true
      return false
    },

    /**
       * @param {String}
       * @return {Boolean}
       * @description 영문 유효성 검증
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
       * @description 이메일 유효성 검증
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
       * @description 비밀번호 유효성 검증 - 특수문자 / 문자 / 숫자 포함 + 8 ~ 15자리
       * @example commonUtils.valid.password(str)
       */
    password (str: string): boolean {
      const RegExp = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/
      if (RegExp.test(str)) return true
      return false
    }
  }

  //= =================================================//

  /**
     * @namespace commonUtils.permission
     * @description 권한 검증 관련 함수
     */
  commonUtils.permission = {
    /**
       * @param {Number}
       * @return {Boolean}
       * @description meta 레벨에 따른 권한 검증
       * @example commonUtils.permission.metaAuth(level)
       */
    metaAuth (level: number): boolean {
      const auth = sessionStorage.auth || 'ADMIN'
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
       * @param {String}
       * @return {Boolean}
       * @description 라우터에 따른 권한 검증
       * @example commonUtils.permission.routeAuth(url)
       */
    routeAuth (url: string): boolean {
      const auth = sessionStorage.auth || 'ADMIN'
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
       * @return {Object(Boolean)}
       * @example 권한에 따른 화면 반영
       * @example commonUtils.permission.menuAuth()
       */
    menuAuth (): { admin: boolean; user: boolean } {
      const auth = sessionStorage.auth || 'ADMIN'
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

  //= =================================================//

  return commonUtils
})(window.commonUtils || {})
