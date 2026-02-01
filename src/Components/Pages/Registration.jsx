import React, { 
    useReducer, 
    useContext, 
    createContext, 
    useMemo, 
    useCallback, 
    useDebugValue, 
    useRef, 
    useState,
    useEffect,
    memo as ReactMemo 
} from "react";
// Animation Library: For smooth UI transitions and cool effects
import { motion, AnimatePresence } from "framer-motion";
import { 
    Activity, ShieldCheck, CreditCard, Smartphone, 
    Zap, CheckCircle, User, Calendar, MapPin, 
    Receipt, ChevronRight, Lock, Globe, RefreshCcw, Fingerprint, Code, AlertTriangle, 
    TrendingUp, PenTool, Image, Aperture, Clock, Settings, HardHat, Server, Database, Save, Loader,
    Clock as ClockIcon, TrendingDown, Users, List, GitBranch, ChevronsDown, Briefcase, BarChart, X, ToggleRight, DatabaseBackup, Wallet, Layers, Bell, Maximize, Scan, Eye, Key, Hash, Pizza, Home, Tag, QrCode, Barcode, Gift, Banknote, UserPlus, FileText, Clipboard, MessageSquare, BriefcaseBusiness, UserCog, UserCheck, Link, DollarSign 
} from 'lucide-react';

// =========================================================
// 1. 🖼️ CORE JAVASCRIPT & UTILITIES MASTERCLASS (L 50 - 110)
// =========================================================

const PRASHANTA_CONFIG = {
    PHONE: "+91 8945512739",
    NAME: "Prashanta",
    TITLE: "CEO", 
    TYPO_STOCK_NAME: "INFENCOERA",
    ANALYTICS_ENDPOINT: "/api/log",
    
    // --- FEATURE FLAG DEFINITION (ALL FLAGS FIXED / NON-TOGGLEABLE) ---
    FEATURE_SET_A: { 
        STOCK_TICKER: true,     
        INSURANCE_OPTION: false, 
        MAXIMIZE_SECURITY: true, 
    },
    ARCHITECTURE_QUALITY_THRESHOLD: 3, 
    BANK_CODES: {
        SBI: { name: "State Bank of India", color: "bg-blue-600", icon: Home }, 
        UCO: { name: "UCO Bank", color: "bg-green-600", icon: Wallet },
        KOTAK: { name: "Kotak Mahindra Bank", color: "bg-purple-600", icon: Zap },
        AXIS: { name: "Axis Bank", color: "bg-red-600", icon: Globe },
        HDFC: { name: "HDFC Bank", color: "bg-orange-600", icon: Lock },
    },
    PAYMENT_MODES: [
        { key: 'UPI', label: 'UPI QR Scan', icon: Scan },
        { key: 'CARD', label: 'Bank Card / Debit', icon: CreditCard },
        { key: 'WALLET', label: 'Prashanta Wallet', icon: Wallet }, 
        { key: 'NETBANKING', label: 'NetBanking', icon: Banknote }, 
    ],
    DOCTOR_SUGGESTIONS: [
        { id: 'DrP', name: 'Dr. Prashanta', advice: 'Extend by 5 min', code: 'P5MIN' },
        { id: 'DrA', name: 'Dr. Alpha', advice: 'Force Retry', code: 'FORCE' },
        { id: 'DrB', name: 'Dr. Beta', advice: 'Increase security timeout', code: 'SECURE' },
    ],
    // V17: Admin Password
    ADMIN_PASSWORD: "743289", 
    // V17: Transaction Linking/Tokenization Feature
    TRANSACTION_LINK_AMOUNT: 2500, // In INR
};

// DEF: High-Order Function using JS closures for currency formatting.
const createFormatter = (currencyCode, locale = 'en-IN') => (amount) => {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currencyCode,
        maximumFractionDigits: 2
    }).format(amount);
};

const formatCurrency = createFormatter('INR');
const formatStock = createFormatter('USD', 'en-US');

// DEF: Simulates an external API call using JS Promises.
const processPaymentAPI = async (data) => {
    const latency = Math.random() * 1000 + 1000; 

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.15) { 
                resolve({ 
                    success: true, 
                    transactionId: `TXN-${Date.now()}`,
                    // V17: Simulated Tokenized Link
                    tokenizedLink: `TXN-LINK-${Math.random().toString(36).substring(2, 10).toUpperCase()}`
                });
            } else {
                reject({ success: false, error: "Gateway Timeout: Prashanta's Server Busy" });
            }
        }, latency);
    });
};

// =========================================================
// 2. 🧠 REACT STATE MANAGEMENT: useReducer & Context (L 112 - 230)
// =========================================================

const getInitialState = () => ({
    step: 1, 
    status: 'IDLE', 
    // V17: Role and Auth State
    userRole: 'USER', // USER | ADMIN
    isAuthOverlayOpen: false,
    
    formData: {
        name: PRASHANTA_CONFIG.NAME, age: "28", phone: PRASHANTA_CONFIG.PHONE, 
        email: "prashanta@code.com", gender: "Male",
        paymentMode: "CARD", 
        selectedBank: "SBI", 
        networkFee: 0, 
        // Card Security Fields
        cardNumber: "",
        cardCVV: "",
        cardExpiry: "",
        cardOTP: "",
        // NETBANKING Fields
        netbankingUsername: "",
        netbankingPassword: "",
        // V17: Transaction Linking Field
        transactionLinkAmount: PRASHANTA_CONFIG.TRANSACTION_LINK_AMOUNT,
        
        referralCode: "PRASHANTA10", 
        useWallet: false,
        useSbiAuth: false, 
        doctorSuggestion: null,
    },
    billing: {
        // V17: Base amount now includes the transaction link amount
        baseAmount: 4500 + PRASHANTA_CONFIG.TRANSACTION_LINK_AMOUNT, 
        insuranceActive: false,
        walletBalance: 1500, 
        bonusAmount: 500,   
    },
    prashantaStock: 1000.00, 
    typoCorrection: false,
    tick: 0, 
    errors: {},
    isAdminPanelOpen: false,
    isUserPopupOpen: false,
});

function paymentReducer(state, action) {
    switch (action.type) {
        case 'UPDATE_STOCK':
            const newStockValue = typeof action.newValue === 'function' 
                ? action.newValue(state.prashantaStock, state.tick)
                : action.newValue;
            return { ...state, prashantaStock: newStockValue, tick: state.tick + 1 };
            
        case 'SET_FIELD':
            return { 
                ...state, 
                formData: { ...state.formData, [action.field]: action.value },
                errors: { ...state.errors, [action.field]: null }
            };

        case 'SET_DYNAMIC_FEES':
            return {
                ...state,
                formData: { 
                    ...state.formData,
                    networkFee: Number(action.networkFee) || 0,
                }
            };
        
        case 'TOGGLE_OPTION':
            return { ...state, formData: { ...state.formData, [action.key]: !state.formData[action.key] } };
        
        case 'NEXT_STEP':
            return { ...state, step: Math.min(3, action.payload || state.step + 1), direction: 1, errors: {} };
        case 'PREV_STEP':
            return { ...state, step: Math.max(1, action.payload || state.step - 1), direction: -1 };
        case 'SET_STATUS':
            return { ...state, status: action.status, errors: action.status === 'FAILURE' ? { api: action.error } : {} };
        case 'RESET':
            return getInitialState();
        
        // V17: Admin Auth Actions
        case 'SET_USER_ROLE':
            return { ...state, userRole: action.role };
        case 'OPEN_AUTH_OVERLAY':
            return { ...state, isAuthOverlayOpen: true };
        case 'CLOSE_AUTH_OVERLAY':
            return { ...state, isAuthOverlayOpen: false };
        case 'ADMIN_LOGIN_SUCCESS':
            return { ...state, userRole: 'ADMIN', isAuthOverlayOpen: false, isAdminPanelOpen: false }; // Ensure panel starts closed
        
        // Admin Actions
        case 'OPEN_ADMIN_PANEL':
            // Only open if already admin, otherwise request auth
            if (state.userRole === 'ADMIN') {
                return { ...state, isAdminPanelOpen: true };
            } else {
                return { ...state, isAuthOverlayOpen: true };
            }
        case 'CLOSE_ADMIN_PANEL':
            return { ...state, isAdminPanelOpen: false };
        case 'OPEN_USER_POPUP':
            return { ...state, isUserPopupOpen: true };
        case 'CLOSE_USER_POPUP':
            return { ...state, isUserPopupOpen: false };

        default:
            return state;
    }
}

// Transaction History Reducer
const historyInitialState = [];
function historyReducer(state, action) {
    switch (action.type) {
        case 'ADD_TRANSACTION':
            return [action.payload, ...state];
        case 'LOAD_HISTORY':
             return action.payload || [];
        case 'CLEAR_HISTORY':
            return [];
        default:
            return state;
    }
}

const PaymentContext = createContext();
const ArchContext = createContext(0);

// =========================================================
// 3. 🔌 REACT CUSTOM HOOKS (High-Tech Features) (L 232 - 400)
// =========================================================

// DEF: Custom Hook for Local Storage Persistence 
const useLocalStorage = (key, defaultValue) => {
    const getStorageValue = () => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (error) {
            console.error(`Error reading localStorage key "${key}": %o`, key, error);
            return defaultValue;
        }
    };
    
    const [value, setValue] = useState(getStorageValue);

    useEffect(() => {
        try {
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error(`Error writing localStorage key "${key}": %o`, key, error);
        }
    }, [key, value]);
    
    useDebugValue(value, v => `Persisted State: ${JSON.stringify(v)}`);
    return [value, setValue];
};

// DEF: Custom Hook for Prop Drilling Detection
const useArchitectureQualityCheck = (componentName) => {
    const currentDepth = useContext(ArchContext);
    
    useEffect(() => {
        if (currentDepth > PRASHANTA_CONFIG.ARCHITECTURE_QUALITY_THRESHOLD) {
            console.warn(
                `[PRASHANTA-ARCH-ALERT] Component <${componentName}> is at depth **${currentDepth}**. ` + 
                `This violates the Arch Quality Threshold (${PRASHANTA_CONFIG.ARCHITECTURE_QUALITY_THRESHOLD}) and indicates potential prop drilling. ` +
                `Consider Context or State Tunneling.`
            );
        }
    }, [currentDepth, componentName]);
    
    return { depth: currentDepth };
};

// DEF: Simplified Feature Flag Manager
const useFeatureFlagManager = () => {
    const flags = useMemo(() => PRASHANTA_CONFIG.FEATURE_SET_A, []);
    
    const noop = useCallback(() => console.warn("Feature Flag Manager is fixed."), []);

    return useMemo(() => ({
        flags,
        toggleFlag: noop,
        setFlag: noop,
        resetFlags: noop,
    }), [flags, noop]);
};

// DEF: Custom Hook for advanced billing logic (V17 Update: Transaction Link Amount)
const useBillingEngine = (billingState, formData, featureFlags) => {
    const { baseAmount, walletBalance, bonusAmount } = billingState;
    const { referralCode, useWallet, transactionLinkAmount } = formData;

    return useMemo(() => {
        
        let discount = 0;
        let walletApplied = 0;
        let bonusApplied = 0;
        
        // The baseAmount now includes the transaction link amount from the start
        let amountBeforeDiscount = baseAmount; 
        
        // 1. Referral Discount (10% flat if code exists)
        if (referralCode && referralCode.length > 0) {
            discount = amountBeforeDiscount * 0.10; // 10% off
        }
        
        let totalAfterDiscount = Math.max(0, amountBeforeDiscount - discount);
        
        // 2. Wallet & Bonus Application
        if (useWallet) {
            const availableWallet = walletBalance + bonusAmount;
            
            if (totalAfterDiscount > 0) {
                walletApplied = Math.min(totalAfterDiscount, availableWallet);
                totalAfterDiscount -= walletApplied;
                
                bonusApplied = Math.min(walletApplied, bonusAmount);
            }
        }
        
        const tax = totalAfterDiscount * 0.18;
        const networkFee = 5; 

        const finalTotal = totalAfterDiscount + tax + networkFee; 
        
        // Separate the original base amount + Transaction Link Fee
        const originalBase = baseAmount - transactionLinkAmount;

        return {
            subtotal: originalBase, // Show base amount without the link amount
            transactionLinkFee: transactionLinkAmount, // Show the new fee
            effectiveSubtotal: amountBeforeDiscount, // Total before discounts
            referralDiscount: Math.round(discount),
            walletApplied: Math.round(walletApplied),
            bonusApplied: Math.round(bonusApplied),
            tax: Math.round(tax),
            networkFee: Math.round(networkFee),
            total: Math.round(finalTotal), 
        };
    }, [baseAmount, formData, walletBalance, bonusAmount, referralCode, useWallet, transactionLinkAmount]); 
};

// DEF: ADVANCED Stock Ticker (Always ON)
const usePrashantaStockTicker = (dispatch, featureFlags) => {
    useEffect(() => {
        if (!featureFlags.STOCK_TICKER) {
            return; 
        }

        const interval = setInterval(() => {
            dispatch({ 
                type: 'UPDATE_STOCK', 
                newValue: (prevStock, tick) => {
                    const baseChange = (Math.random() * 0.03 - 0.015);
                    const cyclicalChange = 0.02 * Math.sin(tick * 0.1); 
                    
                    const change = baseChange + cyclicalChange;
                    const newStock = prevStock + (prevStock * change);
                    
                    return parseFloat(newStock.toFixed(2));
                }
            });
        }, 1500);

        return () => clearInterval(interval);
    }, [dispatch, featureFlags.STOCK_TICKER]); 
};

// DEF: Dynamic Fee Calculation (Simplified: only Network Fee remains)
const useDynamicFeeCalculation = (dispatch) => {
    useEffect(() => {
        dispatch({
            type: 'SET_DYNAMIC_FEES',
            networkFee: 5, // Static fee
        });
        
    }, [dispatch]); 
};

// DEF: Client-Side Analytics Logger (No change in core function)
const useAnalyticsLogger = (state) => {
    const logEvent = useCallback((eventName, data = {}) => {
        const payload = {
            timestamp: new Date().toISOString(),
            user_id: state.formData.phone,
            event_name: eventName,
            app_version: "v17.0.0", // Updated Version
            event_data: { 
                ...data,
                active_features: JSON.stringify(state.featureFlags.flags),
                final_total: eventName === 'PAYMENT_SUCCESS' ? state.bill?.total : undefined 
            },
        };

        console.groupCollapsed(`[ANALYTICS] ${eventName}`);
        console.log(`Sending to ${PRASHANTA_CONFIG.ANALYTICS_ENDPOINT}:`);
        console.log(JSON.stringify(payload, null, 2));
        console.groupEnd();

    }, [state.formData.phone, state.bill, state.featureFlags.flags]); 

    useEffect(() => {
        if (state.step === 2) {
            logEvent('STEP_TWO_ENTERED', { from: 'Step 1' });
        }
        if (state.status === 'SUCCESS') {
            logEvent('PAYMENT_SUCCESS', { method: state.formData.paymentMode });
        }
        if (state.status === 'FAILURE') {
            logEvent('PAYMENT_FAILURE', { error: state.errors.api });
        }
    }, [state.step, state.status, logEvent, state.formData.paymentMode, state.errors.api]);
    
    return { logEvent };
};

// DEF: Custom Hook for Payment Orchestration
const usePaymentOrchestrator = (state, dispatch, historyDispatch, bill, logEvent) => {
    const handlePayment = useCallback(async () => {
        if (state.status !== 'IDLE' || state.step !== 2) return; 

        // Basic Card Validation Check
        if (state.formData.paymentMode === 'CARD' && (!state.formData.cardNumber || !state.formData.cardCVV || !state.formData.cardOTP)) {
             dispatch({ type: 'SET_STATUS', status: 'IDLE' }); 
             dispatch({ type: 'SET_FIELD', field: 'form', value: null });
             return dispatch({ 
                 type: 'SET_STATUS', 
                 status: 'FAILURE', 
                 error: "Card Security Details (Number, CVV, OTP) are required for secure processing." 
             });
        }
        
        // NetBanking Validation Check
        if (state.formData.paymentMode === 'NETBANKING' && (!state.formData.netbankingUsername || !state.formData.netbankingPassword)) {
            dispatch({ type: 'SET_STATUS', status: 'IDLE' }); 
            return dispatch({ 
                type: 'SET_STATUS', 
                status: 'FAILURE', 
                error: "NetBanking Username and Password are required." 
            });
        }
        
        // SBI Auth Check (Simulated)
        if (state.formData.useSbiAuth && state.formData.selectedBank === 'SBI') {
            console.log("SBI Bio-Authentication step triggered...");
            await new Promise(res => setTimeout(res, 1000)); // Simulate auth delay
            if (Math.random() < 0.1) {
                 return dispatch({ 
                     type: 'SET_STATUS', 
                     status: 'FAILURE', 
                     error: "SBI Bio-Authentication Failed. Try OTP." 
                 });
            }
        }
        
        logEvent('PAYMENT_INITIATED', { amount: bill.total, wallet: state.formData.useWallet, mode: state.formData.paymentMode });

        try {
            dispatch({ type: 'SET_STATUS', status: 'SCANNING' });
            await new Promise(res => setTimeout(res, 3000)); 

            dispatch({ type: 'SET_STATUS', status: 'PROCESSING' });
            
            const result = await processPaymentAPI({
                ...state.formData, 
                stockPrice: state.prashantaStock, 
            }); 

            if (result.success) {
                dispatch({ type: 'SET_STATUS', status: 'SUCCESS' });
                logEvent('PAYMENT_SUCCESS', { transaction_id: result.transactionId }); 
                historyDispatch({ 
                    type: 'ADD_TRANSACTION', 
                    payload: {
                        id: result.transactionId,
                        amount: bill.total,
                        date: new Date().toISOString(),
                        stock: state.prashantaStock,
                        fees: bill.networkFee,
                        // V17: Tokenized Link added to history
                        tokenizedLink: result.tokenizedLink, 
                        linkAmount: state.formData.transactionLinkAmount,
                    }
                });
            } else {
                dispatch({ type: 'SET_STATUS', status: 'FAILURE', error: result.error });
            }
        } catch (error) {
            dispatch({ type: 'SET_STATUS', status: 'FAILURE', error: error.error || "Unknown Network Error" });
        }
    }, [state.formData, state.status, dispatch, state.prashantaStock, historyDispatch, bill, logEvent, state.step]);

    return { handlePayment };
};

// =========================================================
// 4. ⚠️ ERROR BOUNDARY & MEMOIZED COMPONENTS (L 402 - 530)
// =========================================================

class PrashantaErrorBoundary extends React.Component {
    static getDerivedStateFromError(error) { return { hasError: true, errorInfo: error }; }
    componentDidCatch(error, errorInfo) { console.error("Prashanta App Error Boundary Caught:", error, errorInfo); }
    state = { hasError: false, errorInfo: null };
    render() {
        if (this.state.hasError) {
            return (
                <div className="p-8 bg-red-100 border-2 border-red-500 rounded-xl text-center shadow-xl">
                    <AlertTriangle size={32} className="text-red-600 mx-auto mb-3"/>
                    <h2 className="text-xl font-bold text-red-700">PRASHANTA'S REACTOR CORE MELTDOWN!</h2>
                    <p className="text-sm text-red-500 mt-2">A critical error occurred. Please refresh or check the console.</p>
                    <p className="text-xs mt-3 bg-red-200 p-2 rounded">Error: {this.state.errorInfo.toString()}</p>
                </div>
            );
        }
        return this.props.children; 
    }
}

const InputGroup = ReactMemo(({ label, icon: Icon, error, value, onChange, type = "text", maxLength, ...props }) => (
    <div className="space-y-1">
        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">{label}</label>
        <div className={`flex items-center bg-gray-50 border-2 rounded-xl px-4 py-3 transition-colors focus-within:bg-white focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10 ${error ? 'border-red-400 bg-red-50' : 'border-transparent'}`}>
            <Icon size={18} className={`mr-3 ${error ? 'text-red-500' : 'text-gray-400'}`} />
            <input 
                className="bg-transparent w-full outline-none text-gray-800 font-medium placeholder-gray-400"
                value={value}
                onChange={onChange}
                type={type}
                maxLength={maxLength}
                {...props} 
            />
        </div>
        {error && <p className="text-xs text-red-500 font-bold ml-1">{error}</p>}
    </div>
));

const ArchWrapper = ({ children, componentName }) => {
    const parentDepth = useContext(ArchContext);
    const newDepth = parentDepth + 1;
    useArchitectureQualityCheck(componentName);

    return (
        <ArchContext.Provider value={newDepth}>
            {children}
        </ArchContext.Provider>
    );
};


// =========================================================
// 5. 👑 MAIN APPLICATION WRAPPER & LOGIC (L 532 - 680)
// =========================================================

// V17: Admin Authentication Overlay
const AdminAuthOverlay = () => {
    const { dispatch } = useContext(PaymentContext);
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleLogin = (e) => {
        e.preventDefault();
        setError(null);
        if (password === PRASHANTA_CONFIG.ADMIN_PASSWORD) {
            dispatch({ type: 'ADMIN_LOGIN_SUCCESS' });
        } else {
            setError("Authentication Failed. Invalid Admin Password.");
        }
    };

    return (
        <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="absolute inset-0 bg-slate-900/95 backdrop-blur-sm z-[200] flex items-center justify-center p-6 text-center text-white"
        >
            <motion.form 
                onSubmit={handleLogin}
                initial={{ scale: 0.9, y: 50 }} animate={{ scale: 1, y: 0 }} transition={{ type: "spring", stiffness: 100 }}
                className="bg-slate-800 p-8 rounded-3xl shadow-2xl border-2 border-red-500 max-w-sm w-full"
            >
                <div className="flex justify-between items-start mb-6">
                    <h2 className="text-3xl font-black text-red-400 flex items-center gap-2">
                        <UserCog size={28}/> Admin Login
                    </h2>
                    <button type="button" onClick={() => dispatch({ type: 'CLOSE_AUTH_OVERLAY' })} className="text-slate-400 hover:text-white">
                        <X size={24}/>
                    </button>
                </div>
                
                <p className="text-sm text-red-300 mb-6 border-b border-red-500/50 pb-3">
                    Unauthorized access will trigger system lockdown.
                </p>

                <InputGroup
                    label="Admin Password"
                    icon={Lock}
                    type="password"
                    placeholder="Enter 743289"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    error={error}
                    maxLength={10}
                />

                <button 
                    type="submit"
                    className="w-full py-3 mt-6 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl shadow-lg shadow-red-500/20 flex items-center justify-center gap-2 transition-colors"
                >
                    <UserCheck size={18}/> Authenticate as Admin
                </button>
            </motion.form>
        </motion.div>
    );
};


const MainApplication = () => {
    // 1. Core State Setup
    const [state, dispatch] = useReducer(paymentReducer, getInitialState());
    const [history, historyDispatch] = useReducer(historyReducer, historyInitialState);
    const featureFlags = useFeatureFlagManager();

    state.featureFlags = featureFlags; 

    // 2. Data Persistence Hooks
    const [persistedFormData, setPersistedFormData] = useLocalStorage('prashantaFormData', state.formData);
    const [persistedHistory, setPersistedHistory] = useLocalStorage('prashantaTxnHistory', history);
    const [persistedRole, setPersistedRole] = useLocalStorage('prashantaUserRole', state.userRole);

    // 3. Logic Hooks Setup 
    // Pass formData to billing engine for referral/wallet logic
    const bill = useBillingEngine(state.billing, state.formData, featureFlags.flags); 
    const { logEvent } = useAnalyticsLogger({ ...state, bill, featureFlags }); 
    usePrashantaStockTicker(dispatch, featureFlags.flags); 
    useDynamicFeeCalculation(dispatch); 
    const { handlePayment } = usePaymentOrchestrator(state, dispatch, historyDispatch, bill, logEvent);
    
    // Data Hydration & Sync
    useEffect(() => {
        historyDispatch({ type: 'LOAD_HISTORY', payload: persistedHistory });
        dispatch({ type: 'SET_USER_ROLE', role: persistedRole }); // Load user role
    }, []); 

    useEffect(() => {
        setPersistedFormData(state.formData);
        setPersistedHistory(history);
        setPersistedRole(state.userRole); // Sync user role
    }, [state.formData, history, state.userRole, setPersistedFormData, setPersistedHistory, setPersistedRole]); 

    const { prashantaStock, formData, isAdminPanelOpen, isUserPopupOpen, userRole, isAuthOverlayOpen } = state;

    const isAdmin = userRole === 'ADMIN';

    return (
        <ArchContext.Provider value={0}>
            <PaymentContext.Provider value={{ state, dispatch, bill, history, historyDispatch, logEvent, featureFlags, isAdmin }}>
                <div className="min-h-screen bg-[#F3F4F6] flex items-center justify-center p-4 md:p-8 font-sans text-gray-800">
                    <div className="max-w-6xl w-full bg-white rounded-4xl shadow-2xl overflow-hidden grid lg:grid-cols-2 min-h-[700px]">
                        
                        {/* --- LEFT COLUMN: BRANDING & FIXED FEATURES --- */}
                        <div className="bg-slate-900 text-white p-8 md:p-12 relative overflow-hidden flex flex-col justify-between">
                            <ArchWrapper componentName="LeftColumn">
                                <div className="relative z-10">
                                    <div className="flex items-center gap-6 mb-6">
                                        <motion.div
                                            initial={{ scale: 0 }} animate={{ scale: 1 }}
                                            transition={{ type: "spring", stiffness: 100 }}
                                            className="w-20  md:h-18 h-12 not-md:w-18 bg-blue-600/50 rounded-full flex items-center justify-center shadow-lg border-2 border-white/50"
                                        >
                                            <Image size={20} />
                                        </motion.div>
                                        <div>
                                            <h1 className="text-3xl font-black tracking-tight">{PRASHANTA_CONFIG.TITLE} CMMS HOSPITAL PAYMENT </h1>
                                            <p className="text-blue-200 text-sm font-medium">AUTHENTICATION V 0.25</p>
                                        </div>
                                    </div>
                                    
                                    {/* --- LOGO SECTION --- */}
                                    <div className="flex justify-start gap-4 mb-8">
                                        <LogoIcon Logo={Home} label="CMMS" color="text-red-500" />
                                        <LogoIcon Logo={Pizza} label="PAYMENT.." color="text-pink-500" />
                                    </div>
                                    {/* ------------------------ */}

                                    {featureFlags.flags.STOCK_TICKER && (
                                        <StockTicker prashantaStock={prashantaStock} dispatch={dispatch} tick={state.tick} />
                                    )}
                                    
                                    <LiveBillingSummary bill={bill} fee={formData.networkFee} walletData={state.billing} formData={formData} />
                                    
                                    <ArchitectureWarningDisplay />
                                    
                                    {/* New Fixed Feature Status Display */}
                                    <FixedFeatureStatus featureFlags={featureFlags.flags} />

                                </div>
                            </ArchWrapper>

                            <div className="relative z-10">
                                {/* V17: Admin Button with Status */}
                                <button 
                                    onClick={() => dispatch({ type: 'OPEN_ADMIN_PANEL' })}
                                    className={`w-full py-3 mt-4 text-white font-bold rounded-xl shadow-lg flex items-center justify-center gap-2 transition-colors ${
                                        isAdmin 
                                        ? 'bg-green-600 hover:bg-green-700 shadow-green-500/20' 
                                        : 'bg-yellow-600 hover:bg-yellow-700 shadow-yellow-500/20'
                                    }`}
                                >
                                    {isAdmin ? <UserCheck size={18}/> : <UserCog size={18}/>} 
                                    Admin Panel (Total Case)
                                    <span className="text-xs font-normal ml-2 p-1 px-2 rounded-full bg-white/20">
                                        {isAdmin ? 'Authenticated' : 'Login Required'}
                                    </span>
                                </button>
                                
                                <div className="flex gap-6 text-slate-400 text-xs font-medium mt-6">
                                    <span className="flex items-center gap-2"><Lock size={12}/> PRASHANTA Secured</span>
                                    <span className="flex items-center gap-2"><Briefcase size={12}/> Co-Founder Verified</span>
                                </div>
                            </div>
                        </div>

                        {/* --- RIGHT COLUMN: INTERACTIVE FORM & HISTORY --- */}
                        <div className="p-6 md:p-12 bg-white relative flex flex-col"> 
                            
                            <StepProgressBar currentStep={state.step} />
                            
                            <div className="lg:hidden mb-8 p-6 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                                <p className="text-gray-400 text-xs font-bold uppercase">Total Payable</p>
                                <h2 className="text-3xl font-black text-slate-900">{formatCurrency(bill.total)}</h2>
                            </div>

                            <div className="flex-1 overflow-y-auto">
                                <ArchWrapper componentName="RightColumn">
                                    <AnimatePresence mode="wait">
                                        {state.step === 1 && <RegistrationStep />}
                                        {state.step === 2 && 
                                            <ArchWrapper componentName="PaymentStepLayer">
                                                <PaymentStep handlePayment={handlePayment} />
                                            </ArchWrapper>
                                        }
                                        {state.step === 3 && <TransactionHistoryModule />} 
                                    </AnimatePresence>
                                </ArchWrapper>
                            </div>
                            
                            <AnimatePresence>
                                {/* Overlays are outside the scrollable area */}
                                {(state.status !== 'IDLE' && state.status !== 'SUCCESS' && state.status !== 'FAILURE') && 
                                    <StatusOverlay status={state.status} />
                                }
                                {state.status === 'SUCCESS' && <SuccessOverlay />}
                                {state.status === 'FAILURE' && <FailureOverlay />}
                                {/* V17: Admin Auth Overlay */}
                                {isAuthOverlayOpen && <AdminAuthOverlay />}
                                
                                {/* V16 Admin Features */}
                                {isAdminPanelOpen && <AdminDashboard />}
                                {isUserPopupOpen && <UserPopup />}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </PaymentContext.Provider>
        </ArchContext.Provider>
    );
};

export default function AppContainer() {
    return (
        <React.StrictMode>
            <PrashantaErrorBoundary>
                <MainApplication />
            </PrashantaErrorBoundary>
        </React.StrictMode>
    );
}

// =========================================================
// 6. 🏗️ UI COMPONENTS & STEP LOGIC (L 682 - 1700+)
// =========================================================

// V17: Admin Dashboard Component (Updated to require Admin role)
const AdminDashboard = () => {
    const { history, dispatch, state, isAdmin } = useContext(PaymentContext);
    
    if (!isAdmin) return null; // Should not happen due to pre-check, but safety first.

    const totalCollection = useMemo(() => {
        return history.reduce((sum, tx) => sum + tx.amount, 0);
    }, [history]);

    const totalLinkCollection = useMemo(() => {
        return history.reduce((sum, tx) => sum + (tx.linkAmount || 0), 0);
    }, [history]);

    const simulatedUserBalance = 78000; 

    return (
        <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="absolute inset-0 bg-slate-900/95 backdrop-blur-sm z-[100] flex items-center justify-center p-6 text-center text-white"
        >
            <motion.div 
                initial={{ scale: 0.9, y: 50 }} animate={{ scale: 1, y: 0 }} transition={{ type: "spring", stiffness: 100 }}
                className="bg-slate-800 p-8 rounded-3xl shadow-2xl border-2 border-green-500 max-w-lg w-full"
            >
                <div className="flex justify-between items-start mb-6">
                    <h2 className="text-3xl font-black text-green-400 flex items-center gap-2">
                        <DatabaseBackup size={28}/> Prashanta Admin Console (V17)
                    </h2>
                    <button onClick={() => dispatch({ type: 'CLOSE_ADMIN_PANEL' })} className="text-slate-400 hover:text-red-400">
                        <X size={24}/>
                    </button>
                </div>

                <p className="text-sm text-green-300 mb-6 border-b border-green-500/50 pb-3 flex items-center gap-2">
                    <UserCheck size={16}/> ADMIN ACCESS: **Authenticated**
                </p>

                <div className="grid grid-cols-2 gap-4 text-left">
                    {/* Total Collection */}
                    <div className="bg-slate-700 p-4 rounded-xl shadow-inner border border-slate-600">
                        <div className="flex items-center gap-2 text-green-400 mb-2">
                            <BarChart size={20}/>
                            <span className="font-bold uppercase text-xs">Total Case Collection</span>
                        </div>
                        <p className="text-2xl font-black text-white">{formatCurrency(totalCollection)}</p>
                        <p className="text-xs text-slate-400 mt-1">{history.length} transactions processed.</p>
                    </div>

                    {/* Check Balance by Admin */}
                    <div className="bg-slate-700 p-4 rounded-xl shadow-inner border border-slate-600">
                        <div className="flex items-center gap-2 text-green-400 mb-2">
                            <Wallet size={20}/>
                            <span className="font-bold uppercase text-xs">User Balance Check</span>
                        </div>
                        <p className="text-2xl font-black text-white">{formatCurrency(simulatedUserBalance)}</p>
                        <p className="text-xs text-slate-400 mt-1">Balance for {state.formData.name}</p>
                    </div>
                    
                    {/* V17: Transaction Link Fee Collection */}
                    <div className="bg-slate-700 p-4 rounded-xl shadow-inner border border-slate-600 col-span-2">
                         <div className="flex items-center gap-2 text-blue-400 mb-2">
                            <Link size={20}/>
                            <span className="font-bold uppercase text-xs">Tokenized Link Fee Collection</span>
                        </div>
                        <p className="text-3xl font-black text-blue-300">{formatCurrency(totalLinkCollection)}</p>
                        <p className="text-xs text-slate-400 mt-1">Total collected from {formatCurrency(PRASHANTA_CONFIG.TRANSACTION_LINK_AMOUNT)} security links.</p>
                    </div>
                </div>

                <button 
                    onClick={() => console.log("Admin action: Initiating Backup...")}
                    className="w-full py-3 mt-6 bg-slate-600 hover:bg-slate-500 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-colors"
                >
                    <Save size={18}/> Initiate System Backup
                </button>
            </motion.div>
        </motion.div>
    );
};

// V16: New User Pop-up Component (No change)
const UserPopup = () => {
    const { state, dispatch } = useContext(PaymentContext);

    return (
        <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="absolute inset-0 bg-blue-900/90 backdrop-blur-sm z-[90] flex items-center justify-center p-6 text-center text-white"
        >
            <motion.div 
                initial={{ scale: 0.9, rotate: -5 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: "spring", stiffness: 100 }}
                className="bg-blue-800 p-8 rounded-3xl shadow-2xl border-2 border-blue-400 max-w-md w-full"
            >
                <div className="flex justify-between items-start mb-6">
                    <h2 className="text-3xl font-black text-blue-300 flex items-center gap-2">
                        <UserPlus size={28}/> New User Data Pop
                    </h2>
                    <button onClick={() => dispatch({ type: 'CLOSE_USER_POPUP' })} className="text-blue-400 hover:text-white">
                        <X size={24}/>
                    </button>
                </div>

                <div className="text-left space-y-3 bg-blue-700 p-4 rounded-xl">
                    <div className="text-sm font-medium"><span className="text-blue-200 block text-xs uppercase">Name</span> {state.formData.name}</div>
                    <div className="text-sm font-medium"><span className="text-blue-200 block text-xs uppercase">Phone</span> {state.formData.phone}</div>
                    <div className="text-sm font-medium"><span className="text-blue-200 block text-xs uppercase">Referral Code</span> {state.formData.referralCode || 'N/A'}</div>
                </div>

                <button 
                    onClick={() => console.log("User Data Confirmed")}
                    className="w-full py-3 mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-colors"
                >
                    <CheckCircle size={18}/> Confirm User Data
                </button>
            </motion.div>
        </motion.div>
    );
};

const LogoIcon = ({ Logo, label, color }) => (
    <div className="p-3 bg-slate-800 rounded-lg text-center shadow-md">
        <Logo size={24} className={`mx-auto ${color}`} />
        <p className="text-xs text-slate-400 mt-1 font-medium">{label}</p>
    </div>
);

const StepProgressBar = ({ currentStep }) => {
    const steps = [
        { id: 1, label: "Details", icon: User }, 
        { id: 2, label: "Payment", icon: Wallet }, 
        { id: 3, label: "History", icon: List }
    ];
    
    const progressWidth = ((currentStep - 1) / (steps.length - 1)) * 100;
    
    return (
        <div className="mb-10 pt-4 flex-shrink-0"> 
            <div className="flex justify-between relative">
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 mx-4">
                    <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${progressWidth}%` }}
                        transition={{ duration: 0.5 }}
                        className="h-full bg-blue-600 rounded-full"
                    />
                </div>
                
                {steps.map(step => (
                    <motion.div 
                        key={step.id} 
                        className="flex flex-col items-center z-10"
                        animate={{ scale: step.id === currentStep ? 1.2 : 1 }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    >
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center border-4 transition-colors ${
                            step.id === currentStep 
                            ? 'bg-blue-600 border-blue-200 text-white shadow-lg' 
                            : step.id < currentStep 
                            ? 'bg-green-500 border-green-200 text-white'
                            : 'bg-white border-gray-200 text-gray-400'
                        }`}>
                            <step.icon size={14} />
                        </div>
                        <span className={`text-xs mt-2 font-bold ${
                            step.id === currentStep ? 'text-blue-600' : 'text-gray-500'
                        }`}>{step.label}</span>
                    </motion.div>
                ))}
            </div>
            <div className="text-xs text-center text-gray-400 mt-4 font-medium">
                Step **{currentStep}** of **{steps.length}**
            </div>
        </div>
    );
};

// V16: Card Photo Component (No change)
const CardPhoto = () => {
    const [isUploaded, setIsUploaded] = useState(false);
    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            className={`p-4 rounded-xl border-2 border-dashed ${isUploaded ? 'border-green-400 bg-green-50' : 'border-gray-300 bg-gray-50'} text-center cursor-pointer hover:bg-gray-100 transition-colors`}
            onClick={() => setIsUploaded(!isUploaded)}
        >
            <div className={`mx-auto w-12 h-12 flex items-center justify-center rounded-full ${isUploaded ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-500'} mb-2`}>
                <Image size={24}/>
            </div>
            <p className="text-sm font-bold text-gray-700">Card Photo (Front/Back) Upload</p>
            <p className={`text-xs ${isUploaded ? 'text-green-600 font-bold' : 'text-gray-400'}`}>
                {isUploaded ? 'Photo Attached Successfully!' : 'Click to Simulate Upload'}
            </p>
        </motion.div>
    );
};

// --- QR & BAR CODE SCANNER (No change) ---
const UpiScanner = ReactMemo(() => {
    const { state, bill } = useContext(PaymentContext);
    const bankData = PRASHANTA_CONFIG.BANK_CODES[state.formData.selectedBank];
    const amountDue = bill.total; 

    return (
        <motion.div 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="p-6 bg-white border-2 border-dashed border-blue-300 rounded-xl text-center shadow-inner space-y-4"
        >
            <h3 className="text-lg font-bold text-gray-800">Dynamic Payment Codes</h3>
            
            <div className="flex justify-around items-center gap-4">
                {/* QR Code Section */}
                <div className="w-1/2">
                    <div className="flex justify-center items-center relative w-24 h-24 mx-auto mb-2 overflow-hidden rounded-lg bg-gray-100 p-2 border-4 border-gray-300">
                        <QrCode size={40} className="text-slate-800"/>
                        <motion.div 
                            className="absolute top-0 left-0 right-0 h-1 bg-green-500 shadow-[0_0_10px_#34d399]"
                            animate={{ y: ['0%', '98%', '0%'] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />
                    </div>
                    <p className="text-sm font-bold text-gray-700">Scan QR</p>
                </div>

                {/* Bar Code Section */}
                <div className="w-1/2">
                    <div className="relative w-full h-24 mx-auto mb-2 bg-gray-100 border-4 border-gray-300 rounded-lg flex items-center justify-center p-2 overflow-hidden">
                        <Barcode size={60} className="text-slate-800 transform scale-y-[1.5]"/>
                    </div>
                    <p className="text-sm font-bold text-gray-700">Use Bar Code</p>
                </div>
            </div>
            
            <p className="text-sm text-gray-500 border-t border-gray-100 pt-3">
                Current Due: **{formatCurrency(amountDue)}**. Payment via **{bankData.name}**.
            </p>
        </motion.div>
    );
});

// --- FINGERPRINT COMPONENT (No change) ---
const FingerprintAuth = ReactMemo(() => {
    const [status, setStatus] = useState("Scan to Verify");
    const [color, setColor] = useState("text-gray-400");

    const startScan = () => {
        setStatus("Scanning...");
        setColor("text-yellow-500");
        setTimeout(() => {
            if (Math.random() > 0.2) {
                setStatus("Fingerprint Match Secured!");
                setColor("text-green-500");
            } else {
                setStatus("Retry: Verification Failed");
                setColor("text-red-500");
            }
        }, 1500);
    };

    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            className="p-4 bg-gray-50 border border-gray-200 rounded-xl text-center cursor-pointer hover:bg-gray-100 transition-colors"
            onClick={startScan}
        >
            <motion.div
                animate={{ rotate: status === 'Scanning...' ? 360 : 0 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="mx-auto w-10 h-10 flex items-center justify-center"
            >
                <Fingerprint size={32} className={color}/>
            </motion.div>
            <p className={`text-xs font-bold mt-1 ${color}`}>{status}</p>
            <p className="text-xs text-gray-400">Tap to Initiate Biometric Authorization</p>
        </motion.div>
    );
});

const CardDetailInputs = () => {
    const { dispatch, state } = useContext(PaymentContext);
    const { cardNumber, cardCVV, cardExpiry, cardOTP } = state.formData;

    return (
        <div className="space-y-4">
            <InputGroup 
                label="Card Number (16 Digits)" icon={CreditCard} placeholder="XXXX XXXX XXXX XXXX" 
                value={cardNumber} type="tel" maxLength={19}
                onChange={(e) => {
                    const value = e.target.value.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim();
                    dispatch({ type: 'SET_FIELD', field: 'cardNumber', value: value });
                }}
                required
            />
            
            <div className="grid grid-cols-3 gap-3">
                <InputGroup 
                    label="Expiry (MM/YY)" icon={Calendar} placeholder="MM/YY" 
                    value={cardExpiry} type="text" maxLength={5}
                    onChange={(e) => {
                        let value = e.target.value.replace(/\D/g, '');
                        if (value.length > 2) value = value.slice(0, 2) + '/' + value.slice(2, 4);
                        dispatch({ type: 'SET_FIELD', field: 'cardExpiry', value: value });
                    }}
                    required
                />
                <InputGroup 
                    label="CVV Code" icon={Eye} placeholder="XXX" 
                    value={cardCVV} type="password" maxLength={3}
                    onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'cardCVV', value: e.target.value.replace(/\D/g, '') })}
                    required
                />
                <InputGroup 
                    label="Secure OTP" icon={Key} placeholder="XXXXXX" 
                    value={cardOTP} type="password" maxLength={6}
                    onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'cardOTP', value: e.target.value.replace(/\D/g, '') })}
                    required
                />
            </div>
            
            <p className="text-xs text-blue-500 font-bold flex items-center gap-1 pt-2">
                <Hash size={12}/> Using **{PRASHANTA_CONFIG.FEATURE_SET_A.MAXIMIZE_SECURITY ? 'Max Security Layer' : 'Standard'}** Protocol (V17)
            </p>
        </div>
    );
};

// V16: NetBanking Inputs (No change)
const NetBankingInputs = () => {
    const { dispatch, state } = useContext(PaymentContext);
    const { netbankingUsername, netbankingPassword } = state.formData;
    
    return (
        <motion.div 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="space-y-4 p-4 bg-red-50 rounded-xl border border-red-200"
        >
            <p className="text-xs font-bold text-red-700 uppercase tracking-wider">NetBanking Login</p>
            <InputGroup 
                label="Username" icon={User} placeholder="NetBanking ID"
                value={netbankingUsername}
                onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'netbankingUsername', value: e.target.value })}
                required
            />
            <InputGroup 
                label="Password" icon={Lock} placeholder="******" type="password"
                value={netbankingPassword}
                onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'netbankingPassword', value: e.target.value })}
                required
            />
        </motion.div>
    );
};


const BankCardSelector = ReactMemo(({ selectedBank, dispatch }) => {
    const banks = Object.keys(PRASHANTA_CONFIG.BANK_CODES);

    return (
        <div className="grid grid-cols-2 gap-4">
            {banks.map((bankKey) => {
                const bank = PRASHANTA_CONFIG.BANK_CODES[bankKey];
                const isActive = selectedBank === bankKey;

                return (
                    <motion.div
                        key={bankKey}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => dispatch({ type: 'SET_FIELD', field: 'selectedBank', value: bankKey })}
                        className={`p-4 rounded-xl border-2 flex flex-col justify-between items-start cursor-pointer transition-all ${
                            isActive 
                            ? `${bank.color.replace('bg-', 'border-')} ring-4 ring-opacity-20 ${bank.color.replace('bg-', 'ring-')}`
                            : 'border-gray-100 hover:border-gray-200 bg-white'
                        } h-28 shadow-sm`}
                    >
                        <bank.icon size={20} className={isActive ? `text-white ${bank.color} p-1 rounded` : 'text-gray-400'}/>
                        <div className="mt-4">
                            <p className={`text-sm font-bold ${isActive ? 'text-gray-900' : 'text-gray-500'}`}>{bankKey} Card</p>
                            <p className="text-xs text-gray-400">{bank.name}</p>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
});

// V16: Doctor Suggestion Dropdown (No change)
const DoctorSuggestionDropdown = () => {
    const { dispatch, state } = useContext(PaymentContext);
    const selected = state.formData.doctorSuggestion;
    
    const suggestion = selected 
        ? PRASHANTA_CONFIG.DOCTOR_SUGGESTIONS.find(d => d.id === selected)
        : null;

    return (
        <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1 flex items-center gap-1">
                <MessageSquare size={12}/> Doctor Suggestion (Time-out Logic)
            </label>
            <select
                className="w-full bg-gray-50 border-2 border-transparent rounded-xl px-4 py-3 text-gray-800 font-medium appearance-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                value={selected || ""}
                onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'doctorSuggestion', value: e.target.value })}
            >
                <option value="">-- Select Suggestion --</option>
                {PRASHANTA_CONFIG.DOCTOR_SUGGESTIONS.map(doc => (
                    <option key={doc.id} value={doc.id}>
                        {doc.name}: {doc.advice} (Code: {doc.code})
                    </option>
                ))}
            </select>
            {suggestion && (
                <p className="text-xs text-green-600 font-bold ml-1">
                    Suggestion Applied: {suggestion.advice}.
                </p>
            )}
        </div>
    );
};


const ArchitectureWarningDisplay = () => {
    const { depth } = useArchitectureQualityCheck("ArchitectureWarningDisplay");

    if (depth <= PRASHANTA_CONFIG.ARCHITECTURE_QUALITY_THRESHOLD) {
        return (
            <div className="mt-6 p-4 bg-green-900 rounded-xl text-green-300 border border-green-700 text-sm flex items-center gap-5">
                <Layers size={14}/> ACTIVE   (Current Depth: {depth})
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-6 p-4 bg-red-800 rounded-xl text-red-200 border border-red-500 text-sm font-bold flex items-center gap-2 shadow-xl"
        >
            <Bell size={16}/> ARCHITECTURE WARNING: Prop Drilling Depth **{depth}**!
        </motion.div>
    );
}

const FixedFeatureStatus = ({ featureFlags }) => {
    return (
        <div className="mt-6 p-4 bg-blue-900 rounded-xl text-blue-300 border border-blue-700 text-sm flex items-center gap-2 justify-between">
            <span className="font-bold">System Status:</span>
            <span className="flex items-center gap-1 text-xs">
                <TrendingUp size={12}/> CMMH HOSPITAL
            </span>
            <span className="flex items-center gap-1 text-xs">
                <ShieldCheck size={12}/> SECURITY
            </span>
        </div>
    );
};

const StockTicker = ({ prashantaStock, dispatch, tick }) => {
    const { depth } = useArchitectureQualityCheck("StockTicker");
    
    return (
        <div className="my-6 p-6 bg-slate-800 rounded-2xl shadow-xl border border-slate-700">
            <h3 className="text-slate-400 font-medium uppercase tracking-widest text-sm mb-4">{PRASHANTA_CONFIG.TYPO_STOCK_NAME} - Live Ticker</h3>
            <div className="flex items-center justify-between">
                <span className={`text-4xl font-extrabold flex items-center gap-2 ${prashantaStock >= 1000 ? 'text-green-400' : 'text-yellow-400'}`}>
                    <TrendingUp size={32} /> {formatStock(prashantaStock)}
                </span>
                <span className="text-sm font-bold text-gray-400 p-2 border border-slate-600 rounded-lg">
                    OUTLET PAY
                </span>
            </div>
            <div className="text-xs text-slate-500 mt-2 flex items-center gap-2">
                <BarChart size={12}/> Volatility simulated (Tick: {tick}) (Depth: {depth}).
            </div>
        </div>
    );
}

const LiveBillingSummary = ({ bill, fee, walletData, formData }) => {
    const { depth } = useArchitectureQualityCheck("LiveBillingSummary");
    const { subtotal, tax, total, referralDiscount, walletApplied, bonusApplied, transactionLinkFee } = bill;
    const { walletBalance, bonusAmount } = walletData;
    
    return (
        <div className="hidden lg:block space-y-4 mt-12 bg-slate-800 p-6 rounded-2xl border border-slate-700">
            <h3 className="text-slate-400 font-medium uppercase tracking-widest text-sm">Detailed Bill Breakdown (V17, Depth: {depth})</h3>
            <div className="space-y-3 text-sm">
                
                <div className="flex justify-between text-slate-300"><span>Base Fee (Medical)</span><span>{formatCurrency(subtotal)}</span></div>
                
                {/* V17: Transaction Link Fee */}
                <div className="flex justify-between text-indigo-400 font-bold">
                    <span className="flex items-center gap-1"><Link size={12}/> Transaction Link Fee (Bank Security)</span>
                    <span>+ {formatCurrency(transactionLinkFee)}</span>
                </div>
                
                <div className="flex justify-between text-yellow-400 border-t border-slate-700 pt-2">
                    <span className="font-bold">Total Before Discount</span>
                    <span className="font-bold">{formatCurrency(bill.effectiveSubtotal)}</span>
                </div>
                
                {referralDiscount > 0 && (
                     <div className="flex justify-between text-yellow-400">
                        <span className="flex items-center gap-1"><Tag size={12}/> Referral Discount (10%)</span>
                        <span>- {formatCurrency(referralDiscount)}</span>
                    </div>
                )}
                
                <div className="flex justify-between text-slate-400">
                    <span className="flex items-center gap-1"><ClockIcon size={12}/> Network Fee (Static)</span>
                    <span>+ {formatCurrency(fee)}</span>
                </div>
                
                {walletApplied > 0 && (
                    <div className="flex justify-between text-pink-400 font-bold">
                        <span className="flex items-center gap-1"><Wallet size={12}/> Wallet/Bonus Applied (V17)</span>
                        <span>- {formatCurrency(walletApplied)}</span>
                    </div>
                )}
                
                <div className="flex justify-between text-slate-400"><span>Tax (18% GST)</span><span>{formatCurrency(tax)}</span></div>
                
                <div className="flex justify-between text-3xl font-bold pt-4 border-t border-slate-600">
                    <span>Final Total (V17)</span>
                    <span>{formatCurrency(total)}</span>
                </div>
                
                <div className="pt-2 text-xs text-slate-500">
                    Wallet Balance Before: **{formatCurrency(walletBalance)}** | Bonus Used: **{formatCurrency(bonusApplied)}**
                </div>
            </div>
        </div>
    );
};


const TransactionHistoryModule = () => {
    const { history, historyDispatch, dispatch, logEvent, isAdmin } = useContext(PaymentContext);
    const { depth } = useArchitectureQualityCheck("TransactionHistoryModule"); 

    const [page, setPage] = useState(1);
    const transactionsPerPage = 5;
    
    // V17: Admin can see more details
    const historyToDisplay = isAdmin ? history : history.map(tx => ({ 
        ...tx, 
        tokenizedLink: '[REDACTED]',
        linkAmount: null
    }));
    
    const paginatedHistory = historyToDisplay.slice((page - 1) * transactionsPerPage, page * transactionsPerPage);
    const totalPages = Math.ceil(history.length / transactionsPerPage);
    
    const handlePageChange = useCallback((newPage) => {
        setPage(newPage);
        logEvent('HISTORY_PAGE_CHANGE', { new_page: newPage });
    }, [logEvent]);

    return (
        <motion.div 
            key="step3"
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
            className="space-y-6 h-full flex flex-col pt-8"
        >
            <div className="flex-1 overflow-y-auto pr-1"> 
                {/* Back Button Placed at Top of Step 3 */}
                <button onClick={() => dispatch({ type: 'PREV_STEP', payload: 2 })} className="text-sm text-gray-400 font-bold hover:text-gray-600 mb-4">← Back to Payment</button>
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2"><List size={24}/> Prashanta Transaction Log (Depth: {depth})</h2>
                <p className="text-gray-400 text-sm mb-6">
                    Audit trail of all successful transactions. {isAdmin ? 'ADMIN VIEW: All details visible.' : 'USER VIEW: Sensitive links redacted.'}
                </p>
           
                <div className="space-y-4 p-2 bg-gray-50 rounded-xl border border-gray-100">
                    {history.length === 0 ? (
                        <p className="text-center text-gray-500 pt-10 font-medium">No high-tech transactions recorded yet. Complete Step 2 to add history.</p>
                    ) : (
                        paginatedHistory.map((tx, index) => (
                            <motion.div 
                                key={tx.id} 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="p-4 bg-white rounded-lg shadow-sm border-l-4 border-blue-500 hover:shadow-md transition-shadow"
                            >
                                <div className="flex justify-between text-sm font-bold text-gray-700">
                                    <span className="text-blue-600">{formatCurrency(tx.amount)}</span>
                                    <span className="text-xs text-gray-400">ID: {tx.id.slice(-6)}</span>
                                </div>
                                <div className="grid grid-cols-2 text-xs text-gray-500 mt-1">
                                    <span>Time: {new Date(tx.date).toLocaleTimeString()}</span>
                                    <span>Stock: <span className="font-medium text-gray-700">{formatStock(tx.stock)}</span></span>
                                    <span>Fees Paid: {formatCurrency(tx.fees)}</span>
                                    {/* V17: Display Tokenized Link (Conditional) */}
                                    <span className={`col-span-2 flex items-center gap-1 ${isAdmin ? 'text-green-600 font-bold' : 'text-red-500 font-medium'}`}>
                                        <Link size={12}/> Link Token: {tx.tokenizedLink}
                                        {tx.linkAmount && isAdmin && <span className="text-xs text-gray-400">({formatCurrency(tx.linkAmount)} Fee)</span>}
                                    </span>
                                </div>
                            </motion.div>
                        ))
                    )}
                </div>
            </div> 

            {/* Pagination and Clear Button FIXED at Bottom */}
            <div className="pt-4 flex-shrink-0"> 
                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-4 text-sm font-bold pt-2 mb-4">
                        <button 
                            onClick={() => handlePageChange(page - 1)}
                            disabled={page === 1}
                            className="p-2 rounded-lg bg-gray-100 disabled:opacity-50 hover:bg-gray-200"
                        >
                            Prev
                        </button>
                        <span className="text-gray-600">Page **{page}** of **{totalPages}**</span>
                        <button 
                            onClick={() => handlePageChange(page + 1)}
                            disabled={page === totalPages}
                            className="p-2 rounded-lg bg-gray-100 disabled:opacity-50 hover:bg-gray-200"
                        >
                            Next
                        </button>
                    </div>
                )}

                <button 
                    onClick={() => { historyDispatch({ type: 'CLEAR_HISTORY' }); logEvent('HISTORY_CLEARED'); }}
                    className="w-full text-xs text-red-400 hover:text-red-600 font-bold mt-2 flex items-center justify-center gap-1 transition-colors"
                >
                    <X size={12}/> Clear All History Log
                </button>
            </div>
        </motion.div>
    );
};


const RegistrationStep = () => {
    const { state, dispatch } = useContext(PaymentContext);
    const { depth } = useArchitectureQualityCheck("RegistrationStep"); 
    const { name, phone, referralCode } = state.formData;

    const isReadyToProceed = !!name.trim() || !!phone.trim();

    return (
        <motion.div 
            key="step1"
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
            className="space-y-6 h-full flex flex-col pt-8"
        >
            <div className="flex-1 overflow-y-auto pr-1"> 
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">Patient Details (Arch Depth: {depth})</h2>
                    <p className="text-gray-400 text-sm">Essential personal and device details for the high-security payment protocol.</p>
                </div>

                <div className="space-y-4 pt-4">
                    <InputGroup 
                        label="Full Name" icon={User} placeholder="Prashanta"
                        value={name}
                        onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'name', value: e.target.value })}
                        error={!name.trim() ? "⚠️ Name is highly recommended for security." : null}
                        autoComplete="name"
                        required
                    />
                    <div className="grid grid-cols-2 gap-4">
                        <InputGroup label="Age" icon={Calendar} placeholder="28" type="number" value={state.formData.age}
                            onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'age', value: e.target.value })}/>
                        <InputGroup label="Zip Code" icon={MapPin} placeholder="700-001" type="text" maxLength={10} />
                    </div>
                    <InputGroup 
                        label="Phone (Verification Device)" icon={Smartphone} placeholder={PRASHANTA_CONFIG.PHONE} type="tel"
                        value={phone}
                        onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'phone', value: e.target.value })}
                        error={!phone.trim() ? "⚠️ Phone is required for transaction history." : null}
                        pattern="[0-9]{10}"
                        title="10 digit phone number"
                    />
                    
                    {/* Referral Code Input */}
                    <InputGroup 
                        label="Referral Code (Optional - 10% Discount)" icon={Tag} placeholder="E.g., PRASHANTA10"
                        value={referralCode}
                        onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'referralCode', value: e.target.value })}
                    />
                    
                </div>
                
                {/* V16: New Button for User Pop-up */}
                <button 
                    onClick={() => dispatch({ type: 'OPEN_USER_POPUP' })}
                    className="w-full py-3 mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl shadow-md flex items-center justify-center gap-2 transition-colors"
                >
                    <FileText size={18}/> Show User Pop-up (New Feature)
                </button>

            </div> 

            {/* Next Button PLACED AT BOTTOM */}
            <div className="pt-4 flex-shrink-0"> 
                <motion.button 
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    onClick={() => dispatch({ type: 'NEXT_STEP', payload: 2 })}
                    disabled={!isReadyToProceed} 
                    className={`w-full py-4 rounded-xl font-bold text-lg shadow-xl transition-all flex items-center justify-center gap-2 group 
                        ${isReadyToProceed ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/30' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`} 
                >
                    Next Step to Process: Payment <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
            </div>
        </motion.div>
    );
};

const PaymentStep = ({ handlePayment }) => {
    const { state, dispatch, bill, history, isAdmin } = useContext(PaymentContext);
    const { depth } = useArchitectureQualityCheck("PaymentStep"); 
    const { useWallet, useSbiAuth, selectedBank, paymentMode } = state.formData;
    const { walletBalance, bonusAmount } = state.billing;

    const titleText = "Payment & Security Details (V17)";
    
    // V17 FIX: History button access controlled by isAdmin flag
    // The button itself is always accessible on this step, but only Admins can see the details in step 3.
    const isHistoryAccessible = history.length > 0;
    
    const isPaymentDisabled = state.step !== 2 || state.status !== 'IDLE';

    return (
        <motion.div 
            key="step2"
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
            className="space-y-6 h-full flex flex-col pt-8"
        >
            <div className="flex-1 overflow-y-auto pr-1"> 
                {/* Back Button Placed at Top of Step 2 */}
                <button onClick={() => dispatch({ type: 'PREV_STEP', payload: 1 })} className="text-sm text-gray-400 font-bold hover:text-gray-600 mb-4">← Back to Details</button>
                <h2 className="text-2xl font-bold text-gray-900">{titleText} (Arch Depth: {depth})</h2>
                
                {/* V17: Transaction Link Feature Display */}
                <div className="flex items-center justify-between p-4 bg-indigo-50 rounded-xl border border-indigo-200 mt-4">
                    <div className="flex items-center gap-2 text-indigo-800">
                        <Link size={20}/>
                        <div className="text-sm font-bold">Transaction Linking Token (Bank Standard)</div>
                    </div>
                    <div className="text-lg font-black text-indigo-600">{formatCurrency(PRASHANTA_CONFIG.TRANSACTION_LINK_AMOUNT)}</div>
                </div>
                <p className="text-xs text-indigo-500 mt-1 ml-1">Fee for a secure, tokenized transaction link required by bank integration.</p>
            
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-6">Select Payment Mode</p>
                <div className="grid grid-cols-4 gap-3 mb-4">
                    {PRASHANTA_CONFIG.PAYMENT_MODES.map((mode) => (
                        <motion.button
                            key={mode.key}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => dispatch({ type: 'SET_FIELD', field: 'paymentMode', value: mode.key })}
                            className={`p-3 rounded-xl border-2 flex flex-col items-center justify-center gap-1 transition-all ${
                                paymentMode === mode.key
                                ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-md'
                                : 'border-gray-100 text-gray-400 hover:border-gray-200 bg-white'
                            }`}
                        >
                            <mode.icon size={18}/>
                            <span className="font-bold text-xs">{mode.label}</span>
                        </motion.button>
                    ))}
                </div>
                
                {/* Wallet and Bonus Toggle */}
                <div className="p-4 bg-purple-50 rounded-xl border border-purple-200 flex justify-between items-center">
                    <div>
                        <div className="flex items-center gap-2 text-sm font-bold text-purple-800">
                            <Wallet size={16}/> Use Prashanta Wallet/Bonus
                        </div>
                        <p className="text-xs text-purple-600 mt-1">
                            Balance: **{formatCurrency(walletBalance)}** (Bonus: {formatCurrency(bonusAmount)})
                        </p>
                    </div>
                    <button
                        onClick={() => dispatch({ type: 'TOGGLE_OPTION', key: 'useWallet' })}
                        className={`px-3 py-1 text-xs font-bold rounded-full transition-colors ${useWallet ? 'bg-purple-600 text-white' : 'bg-purple-200 text-purple-800 hover:bg-purple-300'}`}
                    >
                        {useWallet ? 'Active' : 'Apply'}
                    </button>
                </div>
                
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-6">Select Banking Partner</p>
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 space-y-4">
                    
                    <BankCardSelector 
                        selectedBank={selectedBank} 
                        dispatch={dispatch} 
                    />
                    
                    {/* SBI Authentication Toggle */}
                    {selectedBank === 'SBI' && (
                        <div className="p-3 bg-red-100 rounded-lg flex justify-between items-center border border-red-300">
                            <div className="flex items-center gap-2 text-sm font-bold text-red-800">
                                <Home size={16}/> Enable SBI Bio-Auth (High Security)
                            </div>
                            <button
                                onClick={() => dispatch({ type: 'TOGGLE_OPTION', key: 'useSbiAuth' })}
                                className={`px-3 py-1 text-xs font-bold rounded-full transition-colors ${useSbiAuth ? 'bg-red-600 text-white' : 'bg-red-300 text-red-900 hover:bg-red-400'}`}
                            >
                                {useSbiAuth ? 'ON' : 'OFF'}
                            </button>
                        </div>
                    )}

                    {/* Conditional Security/Details Section */}
                    {paymentMode === 'CARD' && 
                        <>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider pt-2 border-t border-gray-200">Secure Card Details</p>
                            <CardDetailInputs />
                            <CardPhoto /> 
                        </>
                    }
                    
                    {paymentMode === 'NETBANKING' && 
                        <NetBankingInputs /> 
                    }
                    
                    {paymentMode === 'UPI' && 
                        <UpiScanner />
                    }
                </div>
                
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-6">Alternative Authorizations</p>
                <FingerprintAuth />
                
                {/* Doctor Suggestion Dropdown Added */}
                <div className="mt-6">
                    <DoctorSuggestionDropdown />
                </div>
                
                {/* NEW: More Feature Button */}
                <button 
                    onClick={() => console.log("More features coming soon!")}
                    className="w-full text-sm font-bold mt-4 py-3 bg-slate-100 rounded-xl text-slate-500 hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
                >
                    <Gift size={16}/> More Features Coming Soon...
                </button>
            </div> 


            {/* Payment Button & History Button PLACED AT BOTTOM */}
            <div className="pt-4 flex-shrink-0">
                {/* V17 FIX: Dedicated Access History Button (Always visible if history exists, Admin gets full details) */}
                <button 
                    onClick={() => isHistoryAccessible && dispatch({ type: 'NEXT_STEP', payload: 3 })} 
                    disabled={!isHistoryAccessible}
                    className={`text-sm font-bold mb-3 flex items-center gap-1 justify-center w-full transition-colors p-2 rounded-xl border ${
                        isHistoryAccessible ? 'text-blue-500 hover:bg-blue-50 border-blue-200' : 'text-gray-400 border-gray-200 cursor-not-allowed'
                    }`}
                >
                    <List size={14}/> Access History Log 
                    {!isHistoryAccessible && <span className="text-xs italic">(Requires 1 successful payment)</span>}
                    {isAdmin && isHistoryAccessible && <span className="text-xs text-green-500 font-bold ml-1">(Admin View)</span>}
                </button>
                
                {/* Payment Button */}
                <button 
                    onClick={handlePayment}
                    disabled={isPaymentDisabled} 
                    className={`w-full py-4 rounded-xl font-bold text-lg shadow-xl shadow-gray-900/20 transition-all flex justify-between px-6 items-center 
                        ${isPaymentDisabled ? 'bg-gray-400 text-gray-200 cursor-not-allowed' : 'bg-slate-900 hover:bg-black text-white'}`}
                >
                    <span>{isPaymentDisabled ? `Processing... (${state.status})` : `Start Secure Payment via **${selectedBank}**`}</span>
                    <span className="bg-white/20 px-3 py-1 rounded-lg text-sm">{formatCurrency(bill.total)}</span>
                </button>
            </div>
        </motion.div>
    );
};

const StatusOverlay = ({ status }) => {
    const { state } = useContext(PaymentContext);
    const { depth } = useArchitectureQualityCheck("StatusOverlay"); 
    
    return (
    <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="absolute inset-0 bg-white/80 backdrop-blur-xl z-50 flex flex-col items-center justify-center p-6 text-center"
    >
        {status === 'SCANNING' && (
            <>
                <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center relative mb-6 border-4 border-blue-200"
                >
                    <Fingerprint size={40} className="relative z-10" />
                    <motion.div 
                        className="absolute top-0 left-0 w-full h-1 bg-blue-400 shadow-[0_0_15px_#60a5fa]"
                        animate={{ top: ['0%', '100%', '0%'] }}
                        transition={{ duration: 1.5, ease: "linear", repeat: Infinity }}
                    />
                </motion.div>
                <h3 className="text-xl font-bold text-slate-900">Step 1/2: Verify Identity: Prashanta</h3>
                <p className="text-slate-500 mt-2">Executing secure protocol (Depth: {depth})...</p>
            </>
        )}
        
        {status === 'PROCESSING' && (
            <>
                <motion.div 
                    animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    className="w-16 h-16 border-4 border-red-100 border-t-red-600 rounded-full mb-6"
                />
                <h3 className="text-xl font-bold text-slate-900">Step 2/2: Finalizing Transaction...</h3>
                <p className="text-slate-400 mt-2">Awaiting confirmation from Prashanta's High-Availability Server...</p>
                 <div className="text-xs text-blue-400 mt-3 flex items-center gap-1 p-2 bg-blue-50 rounded-lg">
                    <Server size={12}/> Payment Partner: **{state.formData.selectedBank}**
                </div>
            </>
        )}
    </motion.div>
    );
};

const SuccessOverlay = () => {
    const { dispatch, bill, state } = useContext(PaymentContext);
    useArchitectureQualityCheck("SuccessOverlay"); 

    return (
        <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="absolute inset-0 bg-white/80 backdrop-blur-xl z-50 flex flex-col items-center justify-center p-6 text-center"
        >
            <motion.div 
                initial={{ scale: 0.8 }} animate={{ scale: 1 }}
                className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 max-w-sm w-full"
            >
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={32} />
                </div>
                <h2 className="text-2xl font-black text-green-600 mb-2">TRANSACTION SUCCESSFUL!</h2>
                <p className="text-slate-500 mb-6 font-medium">System ID: #PRASHANTA-88219 | Gateway: Approved</p>
                
                <div className="bg-slate-50 p-4 rounded-xl mb-6 border border-slate-100">
                    <div className="flex justify-between text-sm mb-2">
                        <span className="text-slate-400">Total Amount Paid</span>
                        <span className="font-bold text-slate-900">{formatCurrency(bill.total)}</span>
                    </div>
                    {bill.transactionLinkFee > 0 && (
                         <div className="flex justify-between text-sm">
                            <span className="text-slate-400 flex items-center gap-1"><Link size={12}/> Security Link Fee</span>
                            <span className="font-bold text-indigo-600">+ {formatCurrency(bill.transactionLinkFee)}</span>
                        </div>
                    )}
                    {bill.referralDiscount > 0 && (
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-400">Referral Discount Applied</span>
                            <span className="font-bold text-yellow-600">- {formatCurrency(bill.referralDiscount)}</span>
                        </div>
                    )}
                    <div className="flex justify-between text-sm mt-2 pt-2 border-t border-slate-200">
                        <span className="text-slate-400">Payment Partner</span>
                        <span className="font-bold text-blue-600 flex items-center gap-1">{state.formData.selectedBank}</span>
                    </div>
                </div>

                <p className="text-sm font-bold mt-4 text-slate-900">THANK YOU PRASHANTA! Your session is highly valued.</p>
                
                <button 
                    onClick={() => dispatch({ type: 'RESET' })}
                    className="w-full mt-3 py-3 rounded-xl font-bold text-gray-400 hover:text-gray-600 flex items-center justify-center gap-2"
                >
                    <RefreshCcw size={18} /> Initiate New Transaction
                </button>
            </motion.div>
        </motion.div>
    );
};

const FailureOverlay = () => {
    const { dispatch, state } = useContext(PaymentContext);
    useArchitectureQualityCheck("FailureOverlay"); 

    return (
        <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="absolute inset-0 bg-white/80 backdrop-blur-xl z-50 flex flex-col items-center justify-center p-6 text-center"
        >
            <motion.div 
                initial={{ scale: 0.8 }} animate={{ scale: 1 }}
                className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 max-w-sm w-full"
            >
                <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <AlertTriangle size={32} />
                </div>
                <h2 className="text-2xl font-black text-red-600 mb-2">PAYMENT GATEWAY ERROR</h2>
                <p className="text-slate-500 mb-4 font-medium">Critical API Failure: **{state.errors.api}**</p>
                
                <p className="text-sm font-bold mt-4 text-slate-900">Prashanta, please verify your details and retry the payment sequence.</p>
                
                <button 
                    onClick={() => dispatch({ type: 'SET_STATUS', status: 'IDLE' })}
                    className="w-full mt-3 py-3 rounded-xl font-bold text-white bg-red-600 hover:bg-red-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-red-500/20"
                >
                    <RefreshCcw size={18} /> Retry Payment Attempt
                </button>
            </motion.div>
        </motion.div>
    );
};